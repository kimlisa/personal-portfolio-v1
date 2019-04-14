<template>
  <div
    id="app"
    :class="[
      $route.name === $_static.HOME ? 'app--home' : 'app--subpage',
      colorToggled ? 'app--dark' : 'app--light',
      mobileMenu ? 'app--mobile' : 'app-desktop'
    ]"
  >
    <aside
      class="app__sidebar"
      :class="hideSidebar ? 'app__sidebar--hide' : 'app__sidebar--show'"
      v-show="$route.name !== $_static.HOME"
    >
      <SocialMediaIcons :resumeText="false"/>
      <BtnColorToggler
        :smallBtn="true"
        :toggleState="colorToggled"
        @color-toggled="colorToggled = $event"
      />
    </aside>
    <nav class="app__nav">
      <Menu
        :mobileMenu="mobileMenu"
        :colorToggled="colorToggled"
      />
    </nav>
    <main class="app__content">
      <TransitionPage>
        <keep-alive>
          <router-view
            @color-toggled="colorToggled = $event"
            :colorToggled="colorToggled"
          />
        </keep-alive>
      </TransitionPage>
    </main>
    <footer v-show="$route.name !== $_static.HOME" class="app__footer">
      <p>Designed and Built by Lisa Kim, 2019</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';
import Menu from '@/components/Menu.vue';
import BtnColorToggler from '@/components/BtnColorToggler.vue';
import SocialMediaIcons from '@/components/SocialMediaIcons.vue';
import TransitionPage from '@/components/TransitionPage.vue';

@Component({
  components: {
    Menu,
    BtnColorToggler,
    SocialMediaIcons,
    TransitionPage,
  },
})
export default class App extends Vue {
  mobileMenu: boolean = false;

  colorToggled: boolean = false;

  hideSidebar: boolean = true;

  // https://github.com/vuejs/vue-class-component#undefined-will-not-be-reactive
  // 'undefined as any' bypasses type checking
  private $_static: IMenuName = undefined as any; // eslint-disable-line camelcase

  private $_scrolling: boolean = undefined as any; // eslint-disable-line camelcase

  @Watch('colorToggled')
  onBtnToggled() {
    window.localStorage.colorToggled = this.colorToggled;
    this.toggleBodyBg();
  }

  created() {
    this.$_static = MenuName;

    // load users bg color preference if any
    const userPreference: Storage = window.localStorage;
    const colorPreference: string = userPreference.colorToggled;
    if (colorPreference != null && (colorPreference === 'true' || colorPreference === 'false')) {
      this.colorToggled = colorPreference === 'true';
    }

    window.addEventListener('resize', this.checkViewportSize);
    window.addEventListener('scroll', this.sidebarToggler);

    this.checkViewportSize();
    console.log('app', window.localStorage);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.checkViewportSize);
    window.removeEventListener('scroll', this.sidebarToggler);
  }

  toggleBodyBg() {
    document.body.style.backgroundColor = this.colorToggled ? '#000' : '#fff';
  }

  checkViewportSize() {
    // const width: number = window.innerWidth;
    this.mobileMenu = window.matchMedia('(max-width: 37.5em)').matches;

    // if (window.matchMedia('(max-width: 37.5em)').matches) {
    //   console.log('mq matched: ', width);
    // } else {
    //   console.log('mq NOT matched: ', width);
    // }

    if (this.$route.name === this.$_static.HOME) return;

    if (window.innerWidth <= 958) {
      this.hideSidebar = true;
    } else {
      this.sidebarToggler();
    }
  }

  sidebarToggler() {
    if (window.innerWidth <= 958) return;
    if (this.mobileMenu || this.$route.name === this.$_static.HOME || this.$_scrolling) return;

    this.$_scrolling = true;

    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition <= 0) {
      if (!this.hideSidebar) {
        this.hideSidebar = true;
      }
    } else {
      this.hideSidebar = false;
    }

    this.$_scrolling = false;
  }
}
</script>

<style lang="scss">
@import 'scss/theme-light';
@import 'scss/theme-dark';

%shared-home-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  display: block;
  width: 50%;
  content: '';
}

html {
  @include font-primary;
  //@include font-secondary;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;

  /* supposedly a trick to make browser accelerate graphics
   * fixes, some texts appearing blurry in safari
   */

  /* -webkit-transform: translate3d(0, 0, 1px);
  -moz-transform: translate3d(0, 0, 1px);
  -ms-transform: translate3d(0, 0, 1px);
  -o-transform: translate3d(0, 0, 1px);
  transform: translate3d(0, 0, 1px); */

  /* Enable hardware acceleration to fix laggy transitions */

  /* transform: translateZ(0); */
}

body {
  width: 100%;
  padding: 0;
  margin: 0;
  color: #2c3e50;
}

.body--dark {
  background-color: $color-toggle-dark-bg;
}

.body--light {
  background-color: $color-toggle-light-bg;
}

%shared-btn-style {
  padding: 0.625em 0.938em;
  font-size: 1rem;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;

  &:hover {
    transition: 0.15s ease-in;
  }
}

button {
  @extend %shared-btn-style;

  &[disabled=disabled][type=button]:hover {
    color: inherit;
    cursor: not-allowed;
    background-color: inherit;
  }
}

a {
  display: inline-block;
  text-decoration: none;
}

.a--btn {
  @extend %shared-btn-style;
}

h1 {
  @include font-secondary;

  margin: 0;
  margin-top: 0.6em;
  font-size: 3.3rem;
  font-weight: normal;
  line-height: 1em;
}

h2 {
  @include font-secondary;

  margin: 0.4em 0 0 0;
  font-size: 1.86rem;
  font-weight: normal;
}

h3 {
  margin-top: 0;
  font-size: 3.2em;
  font-weight: normal;
  letter-spacing: 0.03em;

  @include font-secondary;

  @media screen and (max-width: 35em) {
    font-size: 2.3em;
  }
}

h4 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2em;

  @media screen and (max-width: 35em) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 25em) {
    font-size: 1.3em;
  }
}

h5 {
  margin-top: 0;
  font-size: 1.1em;
  color: #979797;

  @media screen and (max-width: 25em) {
    font-size: 1em;
  }
}

h6 {
  margin-bottom: 0.2em;
  font-size: 0.9em;
  color: $color-h4;
}

p {
  @include font-secondary;

  line-height: 1.74em;

  &.p--first {
    margin-top: 0;
  }
}

img {
  border-radius: 0.4em;
}

ul {
  @include font-secondary;

  padding-left: 1em;
  margin-left: 0.1em;
  font-size: 17px;
  font-weight: normal;
  list-style-type: none;

  li::before {
    position: relative;
    display: inline-block;
    margin: 0 0.625rem 0 -1.25rem;
    font-size: 1.2em;
    content: '▹';
  }

  &.ul--grid {
    display: grid;
  }
}

input,
textarea {
  @include font-secondary;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  /* & * {
    transition: $transition-bg-toggle;
  } */
}

.app__sidebar {
  position: fixed;
  bottom: 0;
  left: 3%;
  z-index: 1;
  transition: 0.4s ease-in;

  a {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #b4b4b4;
  }

  &::after {
    display: block;
    width: 1px;
    height: 2rem;
    margin: auto auto 1.3rem auto;
    content: '';
    background: #d9d9d9;
  }

  &--hide {
    bottom: -16rem;
  }

  &--show {
    bottom: 0;
  }
}

.app-desktop.app--subpage {
  /* transition: 1s ease; */

  .app__nav {
    position: sticky;
    top: 0;
    z-index: 5;
    margin-top: 2em;
  }
}

.app--home {
  height: 100vh;
  overflow-x: scroll;

  @media #{$mq-browser-height} {
    height: 100%;
    padding: 3.75em 0;
  }

  &::before {
    @extend %shared-home-bg;

    left: 0;
    background-color: $color-toggle-light-bg;
  }

  &::after {
    @extend %shared-home-bg;

    right: 0;
    background-color: $color-toggle-dark-bg;
  }
}

.app--subpage {
  $app--subpage: &;

  position: relative;
  transition: $transition-bg-toggle;

  .app__content {
    padding: 0 5.5em;

    @media screen and (max-width: 59.875em) {
      padding: 0 3em;
    }

    @media screen and (max-width: 30.313em) {
      padding: 0 1.5em;
    }
  }

  &.app--dark {
    .app__sidebar {
      .btn--small {
        background-color: #f4f4f4;
        border: none;
      }
    }

    .app__content {
      @include dark-theme;
    }
  }

  &.app--light {
    .app__sidebar {
      .btn--small {
        background-color: #c0c0c0;
      }

      .btn-color-toggler__moon,
      .btn-color-toggler__sun {
        color: #dcdcdc;
      }
    }

    .app__content {
      @include light-theme;
    }
  }
}

footer p {
  margin: 6em 0 2em 0;
  font-size: 0.813rem;
  font-weight: 400;
  color: #919191;
}

.btn--big {
  padding: 1.1em 1.2em;
  background-color: transparent;
  box-shadow: none;
  transition: 0.15s ease-out;
}
</style>
