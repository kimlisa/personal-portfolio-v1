<template>
  <div class="menu">
    <button
      type="button"
      class="btn btn--menu"
      v-show="mobileMenu"
      @click="showMobileNav = !showMobileNav"
    >menu</button>
    <div
      class="menu__nav-wrapper"
      ref="menuNav"
      v-show="!mobileMenu || mobileMenu && showMobileNav"
    >
      <nav class="menu__nav">
        <div class="menu__nav__left">
          <router-link :to="{ name: $_static.HOME }">home</router-link>
          <router-link :to="{ name: $_static.ABOUT }">about</router-link>
        </div>
        <div class="menu__nav__right">
          <router-link :to="{ name: $_static.PROJECTS }">projects</router-link>
          <router-link :to="{ name: $_static.CONTACT }">contact</router-link>
        </div>
        <div class="menu__nav__mobile" v-show="mobileMenu">
          <div
            class="menu__nav__mobile__close-btn"
            @click="showMobileNav = !showMobileNav"
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
      </nav>
    </div> <!-- menu__nav-wrapper -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';

@Component
export default class Menu extends Vue {
  // props
  // ! telling typescript we are certain mobileMenu is a non-null value
  @Prop(Boolean) readonly mobileMenu!: boolean;

  // reactive data
  showMobileNav: boolean = false;

  // watchers
  // @Watch('mobileMenu')
  // onMobile(newValue: string) {
  //   console.group('watcher mobileMenu');
  //   console.log('newvalue', newValue);
  //   console.groupEnd();
  // }

  // https://github.com/vuejs/vue-class-component#undefined-will-not-be-reactive
  // 'undefined as any' bypasses type checking
  private $_static: IMenuName = undefined as any; // eslint-disable-line camelcase

  // lifecylce hooks
  created() {
    this.$_static = MenuName;
    console.log('menu', this.mobileMenu);
  }

  // methods
  // toggleMobileNav() {
  //   console.log("here", this.showMobileNav)
  //   this.showMobileNav = !this.showMobileNav;
  //   console.log("after", this.showMobileNav, this.mobileMenu);
  //   // const menuNav: HTMLElement = this.$refs.menuNav as HTMLElement;
  //   // menuNav.style.display = this.isNavOpened ? 'none' : 'block';
  //   // this.isNavOpened = !this.isNavOpened;
  // }
}
</script>

<style lang="scss" scoped>
$sub-menu-width: 10.625em;
$sub-menu-margin: 1.875em;
$light-font-color: #fff;
$dark-font-color: #000;
$color-white: #fff;
$color-menu-link: #b9b9b9;
$mq-mobile: "(max-width: 37.5em)"; // 0 ~ 600px
$mq-desktop: "(min-width: 37.563em)"; // 601px ~ inf

.router-link-exact-active {
  font-weight: bold;

  @media #{$mq-mobile} {
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
}

.menu__nav {
  display: flex;
  justify-content: center;

  @media #{$mq-mobile} {
    display: block;
    width: 100%;
    max-width: 155px;
    padding-left: 45px;
    margin-top: 20px;
    border-left: 1px solid #4e4e4e;

    a {
      display: inline-block;
    }
  }
}

@media #{$mq-desktop} {
  .menu__nav__left {
    width: $sub-menu-width;
    margin-right: $sub-menu-margin;
    text-align: right;

    a {
      margin-left: $sub-menu-margin;
      color: $dark-font-color;

      &::after {
        background-color: $dark-font-color;
      }
    }
  }

  .menu__nav__right {
    width: $sub-menu-width;
    margin-left: $sub-menu-margin;
    text-align: left;

    a {
      margin-right: $sub-menu-margin;
      color: $light-font-color;

      &::after {
        /* light on dark heights appear thicker = reduce size */
        height: 0.156rem;
        background-color: $light-font-color;
      }
    }
  }
}

@media #{$mq-mobile} {
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

  .menu__nav-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    padding: 3.75rem 1.875rem;
    overflow: auto;
    text-align: left;
    background: #333;

    a {
      display: inline-block;
      padding: 0.625rem 0;
      font-size: 1.625rem;
      color: $color-menu-link;
      text-transform: uppercase;

      &::after {
        background-color: $color-white;
      }
    }
  }

  .btn--menu {
    position: fixed;
    top: 0;
    right: 0;
    margin: 1.563rem 1.563rem 0 auto;
    color: $color-white;
    background: #6e6e6e;
    border-color: #696969;
  }

  .btn--menu:hover {
    background: #42b983;
  }

  .menu__nav__mobile {
    padding-top: 1.25rem
  }

  .menu__nav__mobile__social {
    display: flex;

    a {
      padding-top: 0.813rem;
      padding-right: 1.375rem;
      padding-bottom: 0.313rem;
      font-size: 2.6rem;
      line-height: 0;

      &::after {
        margin-top: 0.375rem;
      }
    }
  }

  .menu__nav__mobile__close-btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 2.063rem;
    padding-top: 0.375rem;
    margin: 1.75rem 1.875rem 0 0;
    cursor: pointer;
  }

  .menu__nav__mobile__close-btn::before {
    @extend %shared-x-btn;

    top: 0.71em;
    transform: rotate(45deg);
  }

  .menu__nav__mobile__close-btn::after {
    @extend %shared-x-btn;

    transform: rotate(-45deg);
  }
}
</style>
