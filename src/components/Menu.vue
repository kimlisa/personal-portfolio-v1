<template>
  <div class="menu"
       :class="[
          $route.name === $_static.HOME ? 'menu--home' : 'menu--subpage',
          mobileMenu ? 'menu--mobile' : 'menu--desktop'
       ]"
  >
    <button
      type="button"
      class="btn btn--menu"
      @click="toggleMobileNav"
    >menu</button>
    <div
      class="menu__nav-wrapper"
      :class="mobileMenu && showMobileNav ? 'no-behind-scroll' : ''"
      v-show="!mobileMenu || mobileMenu && showMobileNav"
    >
      <div class="menu__nav">
        <div class="menu__nav__left">
          <router-link :to="{ name: $_static.HOME }">home</router-link>
          <router-link :to="{ name: $_static.PROJECTS }">projects</router-link>
        </div>
        <div class="menu__nav__right">
          <router-link :to="{ name: $_static.ABOUT }">about</router-link>
          <router-link :to="{ name: $_static.CONTACT }">contact</router-link>
        </div>
        <div class="menu__nav__mobile" v-show="mobileMenu">
          <div
            class="menu__nav__mobile__close-btn"
            @click="toggleMobileNav"
          ></div>
          <a href="" target="_blank">resume</a>
          <div class="menu__nav__mobile__social">
            <a href="https://github.com/kimlisa" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="https://www.linkedin.com/in/kim-lisa/" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </div> <!--  menu__nav__mobile__social -->
        </div> <!-- menu__nav__mobile -->
      </div>
    </div> <!-- menu__nav-wrapper -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';

@Component
export default class Menu extends Vue {
  // props
  // ! telling typescript we are certain mobileMenu is a non-null value
  @Prop(Boolean) readonly mobileMenu!: boolean;

  // reactive data
  showMobileNav: boolean = false;

  private $_static: IMenuName = undefined as any; // eslint-disable-line camelcase

  // lifecylce hooks
  created() {
    this.$_static = MenuName;
    console.log('menu', this.mobileMenu);
  }

  // methods
  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;

    const bodyEl: HTMLElement = document.body as HTMLElement;
    const htmlEl: HTMLElement = document.documentElement as HTMLElement;

    // prevent body scrolling
    if (this.showMobileNav) {
      bodyEl.style.overflow = 'hidden';
      htmlEl.style.overflow = 'hidden';
      bodyEl.scrollTop = 0;
      htmlEl.scrollTop = 0;
    } else {
      bodyEl.style.overflow = 'auto';
      htmlEl.style.overflow = 'auto';
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

.router-link-exact-active {
  font-weight: bold;
}

.no-behind-scroll {
  overflow: hidden;
}

/*
* Desktop styling
*/
.menu--desktop.menu--subpage {
  /* margin-bottom: 2.8em; */
  padding: 1.25rem;
}

.menu--desktop .btn--menu {
  display: none;
}

.menu--desktop .menu__nav {
  display: flex;
  justify-content: center;

  @media #{$mq-desktop-nav} {
    font-size: scalable-font-size(1rem, 0.2rem, $bp-menu-nav, $bp-header-lg);
  }

  @media #{$mq-header-lg} {
    font-size: max-font-size(1rem, 0.2rem);
  }
}

.menu--desktop .menu__nav__left {
  @include menu-nav-box(right, $color-toggle-light-bg-link);
}

.menu--desktop .menu__nav__right {
  @include menu-nav-box(left, $color-toggle-dark-bg-link, 0.15rem);
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

  &:hover {
    background: #42b983;
  }
}

.menu--mobile .menu__nav-wrapper {
  position: absolute;
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

.menu--mobile .menu__nav {
  display: block;
  width: 100%;
  max-width: 9.688rem;
  padding-left: 2.813rem;
  margin: 5rem 1.875rem 3.75rem 1.875rem;
  border-left: 1px solid #4e4e4e;

  a {
    display: inline-block;
  }
}

.menu--mobile .menu__nav__mobile {
  padding-top: 1.25rem;
}

.menu--mobile .menu__nav__mobile__social {
  display: flex;

  a {
    padding: 0.813rem 1.375rem 0.313rem 0;
    font-size: 2.6rem;
    line-height: 0;

    &::after {
      margin-top: 0.375rem;
    }
  }
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
</style>
