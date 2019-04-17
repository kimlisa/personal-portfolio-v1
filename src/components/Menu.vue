<template>
  <div
    class="menu"
    ref="menu"
    :class="[
      $route.name === $_static.HOME ? 'menu--home' : 'menu--subpage',
      mobileMenu ? 'menu--mobile' : 'menu--desktop',
      colorToggled ? 'menu--dark' : 'menu--light',
      colorToggled && scrolled ? 'menu--dark-scroll' : '',
      !colorToggled && scrolled ? 'menu--light-scroll' : '',
      hideMenu ? 'menu--hide' : 'menu--show',
    ]"
  >
    <button
      type="button"
      class="btn btn--menu"
      @click="toggleMobileNav"
    >menu</button>
    <transition :name="mobileMenu ? 'slide-in-right': ''">
      <div
        class="menu__nav-wrapper"
        ref="navWrapper"
        :class="mobileMenu && showMobileNav ? 'no-behind-scroll' : ''"
        v-show="!mobileMenu || mobileMenu && showMobileNav"
      >
        <div class="menu__colorToggler" v-show="$route.name !== $_static.HOME">
          <BtnColorToggler
            :toggleState="colorToggled"
            :flatDesign="true"
            @color-toggled="$emit('color-toggled', $event)"
          />
        </div>
        <div class="menu__nav">
          <div class="menu__nav__left">
            <router-link :to="{ name: $_static.HOME }" exact>home</router-link>
            <router-link :to="{ name: $_static.PROJECTS }" exact>projects</router-link>
          </div>
          <div class="menu__nav__right">
            <router-link :to="{ name: $_static.ABOUT }" exact>about</router-link>
            <router-link :to="{ name: $_static.CONTACT }" exact>contact</router-link>
          </div>
          <!-- Mobile Menu Only Extra Links -->
          <div class="menu__nav__mobile" v-show="mobileMenu">
            <div
              class="menu__nav__mobile__close-btn"
              @click="toggleMobileNav"
            ></div>
            <SocialMediaIcons :resumeText="true"/>
          </div>
        </div>
      </div> <!-- menu__nav-wrapper -->
    </transition>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';
import SocialMediaIcons from './SocialMediaIcons.vue';
import BtnColorToggler from '@/components/BtnColorToggler.vue';

@Component({
  components: {
    SocialMediaIcons,
    BtnColorToggler,
  },
})
export default class Menu extends Vue {
  // props
  @Prop(Boolean) readonly mobileMenu!: boolean; // ! tells TS, mobileMenu is a non-null value

  @Prop(Boolean) readonly colorToggled!: boolean;

  // reactive data
  showMobileNav: boolean = false;

  scrolled: boolean = false;

  hideMenu: boolean = false;

  // static non reactive data
  /* eslint-disable camelcase */
  private $_static: IMenuName = undefined as any;

  private $_previousScrollPosition: number = undefined as any;

  private $_scrolling: boolean = undefined as any;

  private $_showNav: boolean = undefined as any;

  private $_showBoxShadow: boolean = undefined as any;

  private $_menuElement: HTMLElement = undefined as any;

  private $_scrollHeight: number = undefined as any;

  created() {
    this.$_static = MenuName;
    this.$_previousScrollPosition = 0;
    this.$_scrolling = false;
    this.$_showNav = true;
    this.$_showBoxShadow = false;
    this.$_scrollHeight = 34;

    window.addEventListener('scroll', this.menuScrollListener);

    this.$router.beforeEach((to, from, next) => {
      if (this.showMobileNav) {
        this.toggleMobileNav();
      }
      this.scrolled = false;
      this.hideMenu = false;

      this.$nextTick(() => {
        next();
      });
    });
  }

  mounted() {
    this.$_menuElement = this.$refs.menu as HTMLElement;
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.menuScrollListener);
  }

  // methods
  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;

    const bodyEl: HTMLElement = document.body as HTMLElement;
    const htmlEl: HTMLElement = document.documentElement as HTMLElement;

    // prevent body scrolling while menu is opened
    if (this.showMobileNav) {
      bodyEl.style.overflow = 'hidden';
      htmlEl.style.overflow = 'hidden';
      // bodyEl.scrollTop = 0;
      // htmlEl.scrollTop = 0;
    } else {
      bodyEl.style.overflow = 'auto';
      htmlEl.style.overflow = 'auto';
    }
  }

  closeMenu(evt: Event) {
    if (!this.mobileMenu) {
      return;
    }

    const target: HTMLElement = evt.target as HTMLElement;
    const tag: string = target.tagName.toLowerCase();

    if (tag === 'a' || tag === 'svg' || tag === 'path') {
      this.toggleMobileNav();
    }
  }

  menuScrollListener() {
    if (this.mobileMenu || this.$route.name === this.$_static.HOME || this.$_scrolling) return;

    this.$_scrolling = true;

    const currentScrollPosition = window.scrollY;

    this.toggleDesktopNav(currentScrollPosition);

    this.$_previousScrollPosition = currentScrollPosition;
    this.$_scrolling = false;
  }

  toggleDesktopNav(currentScrollPosition: number) {
    if (currentScrollPosition <= 0) {
      if (this.$_showBoxShadow) {
        this.$_showBoxShadow = false;
        this.scrolled = false;
        // this.hideMenu = false;
        // this.$_showNav = true;
      }
      return;
    }

    if (currentScrollPosition > this.$_scrollHeight && !this.$_showBoxShadow) {
      this.$_showBoxShadow = true;
      this.scrolled = true;
    }

    if (currentScrollPosition > this.$_previousScrollPosition && this.$_showNav) {
      this.$_showNav = false;
      this.hideMenu = true;
    } else if (currentScrollPosition < this.$_previousScrollPosition && !this.$_showNav) {
      this.$_showNav = true;
      this.hideMenu = false;
    }
  }
}
</script>

<style lang="scss" scoped>
$color-mobile-menu-link: #b9b9b9;
$color-white: #fff;

/* for mobile menu, refers to the close 'x' btn */
%shared-x-btn {
  position: relative;
  top: 0.449rem;
  display: block;
  width: 2.5rem;
  height: 0.25rem;
  content: '';
  background: #626262;
  border-radius: 0.125rem;
  transition: 0.5s;

  &:hover {
    background: white;
  }
}

/* in Home.vue, splits title into two boxes */
@mixin menu-nav-box($align, $color, $height:null) {
  $sub-menu-margin: 1.875em;

  width: 11em;
  text-align: $align;

  @if $align == 'left' { margin-left: $sub-menu-margin; }

  @else { margin-right: $sub-menu-margin; }

  a {
    @if $align == 'left' { margin-right: $sub-menu-margin; }

    @else { margin-left: $sub-menu-margin; }

    color: $color;

    &::after {
      @if $height { height: $height; }

      background-color: $color;
    }
  }
}

@mixin anchor-underline {
  a::after {
    display: block;
    width: 0;
    height: 0.188rem;
    content: '';
    transition: 0.25s cubic-bezier(0.7, 0.05, 0.4, 1);
  }

  a:hover::after {
    width: 100%;
  }
}

@include anchor-underline;

.menu--hide {
  top: -4.1em;
}

.menu--show {
  top: 0;
}

.menu--dark-scroll {
  background-color: rgba(34, 34, 34, 0.9);
  box-shadow: rgba(0, 0, 0, 0.9) 0 7px 11px 0;
}

.menu--light-scroll {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: rgba(79, 79, 79, 0.9) 0 4px 7px -6px;
}

.router-link-exact-active {
  font-weight: bold;
}

.no-behind-scroll {
  overflow: hidden;
}

/*
* Mobile styling
*/
.menu--mobile .router-link-exact-active {
  color: $color-white !important;

  &::before {
    position: relative;
    top: 0.031rem;
    display: inline-block;
    width: 0;
    margin: 0 0.625rem 0 -1.25rem;
    content: '';
    border-top: 0.625rem solid transparent;
    border-bottom: 0.625rem solid transparent;
    border-left: 0.625rem solid $color-white;
    border-radius: 0.188rem;
  }
}

.menu--mobile .btn--menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  display: block;
  margin: 1.563rem 1.563rem 0 auto;
  font-size: 1.1rem;
  color: $color-white;
  background: #6e6e6e;
  border-color: #696969;
  box-shadow: 0 0.188rem 0.313rem 0.063rem rgba(0, 0, 0, 0.22);

  &:hover {
    background: $color-h4;
  }
}

.menu--mobile .menu__nav-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  overflow: auto;
  text-align: left;
  background: #333;

  a {
    display: inline-block;
    padding: 0.625rem 0;
    font-size: 1.625rem;
    color: $color-mobile-menu-link;
    text-transform: uppercase;

    &::after {
      background-color: $color-white;
    }
  }
}

.menu__colorToggler {
  position: absolute;
  top: 0.7em;
  right: 2em;

  @media screen and (max-width: 37.5em) {
    position: relative;
    top: 0;
    right: 0;
  }

  ::v-deep .btn--2D {
    display: none;

    &::after {
      background-color: #6e6e6e;
    }

    @media screen and (max-width: 59.875em) {
      display: block;
      font-size: 1em;
    }

    @media screen and (max-width: 37.5em) {
      top: 1em;
      left: 1.1em;
      font-size: 1.6em;
    }
  }
}

.menu--mobile .menu__nav {
  display: block;
  width: 100%;
  max-width: 9.688rem;
  padding-left: 2.813rem;
  margin: 4rem 1.875rem 3.75rem 1.875rem;
  border-left: 1px solid #4e4e4e;

  a {
    display: inline-block;
  }
}

.menu--mobile ::v-deep .social-media-icons {
  @include anchor-underline;

  a {
    padding: 0.813rem 1.375rem 0.313rem 0;
    font-size: 2.6rem;
    line-height: 1em;
    color: $color-mobile-menu-link;

    &::after {
      margin-top: 0.375rem;
      background-color: $color-white;
    }
  }

  .social-media-icons__resume {
    display: inline-block;
    margin-bottom: 0.2em;
    font-size: 1.625rem;
    text-transform: uppercase;
  }
}

.menu--mobile .menu__nav__mobile {
  padding-top: 1.25rem;
}

.menu--mobile .menu__nav__mobile__close-btn {
  position: absolute;
  top: 0;
  right: 0;
  height: 2.063rem;
  padding-top: 0.375rem;
  margin: 1.75rem 1.875rem 0 0;
  cursor: pointer;
}

.menu--mobile .menu__nav__mobile__close-btn::before {
  @extend %shared-x-btn;

  top: 0.71em;
  transform: rotate(45deg);
}

.menu--mobile .menu__nav__mobile__close-btn::after {
  @extend %shared-x-btn;

  transform: rotate(-45deg);
}

/*
* Desktop styling
*/
.menu--desktop {
  .btn--menu { /* stylelint-disable-line no-descending-specificity */
    display: none;
  }

  .menu__nav {
    display: flex;
    justify-content: center;

    @media #{$mq-desktop-nav} {
      font-size: scalable-font-size(1rem, 0.2rem, $bp-menu-nav, $bp-header-lg);
    }

    @media #{$mq-header-lg} {
      font-size: max-font-size(1rem, 0.2rem);
    }
  }

  &.menu--home .menu__nav__left {
    @include menu-nav-box(right, $color-toggle-light-bg-link);
  }

  &.menu--home .menu__nav__right {
    @include menu-nav-box(left, $color-toggle-dark-bg-link, 0.15rem);
  }
}

.menu--desktop.menu--subpage {
  position: relative;
  padding: 0.8rem 0;

  /* transition: 0.2s ease-in; */
  transition: 0.3s ease;

  a {
    margin: 0 1em;
  }

  &.menu--dark {
    /* background-color: #000; */

    a {
      color: #a5a5a5;

      &::after {
        background-color: $color-toggle-light-bg;
      }
    }

    .router-link-exact-active {
      color: #ccc;
    }
  }

  &.menu--light {
    /* background: rgba(255, 255, 255, 0.95); */

    a {
      color: #8d8d8d;

      &::after {
        background-color: $color-toggle-dark-bg;
      }
    }

    .router-link-exact-active {
      color: #5d5d5d;
    }
  }
}

.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: 0.3s;
}

.slide-in-right-leave-to {
  transform: translateX(100%);
}
</style>
