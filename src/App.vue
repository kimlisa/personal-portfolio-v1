<template>
  <div id="app" ref="app">
    <nav class="app__nav">
      <Menu :mobileMenu="mobileMenu"/>
    </nav>
    <main class="app__content">
      <router-view/>
    </main>
    <footer v-if="$route.name !== $_static.HOME" class="app__footer">
      <p>Designed and Built by Lisa Kim, 2019</p>
    </footer>
    <div v-else>
      <BtnColorToggler />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';
import Menu from '@/components/Menu.vue';
import BtnColorToggler from '@/components/BtnColorToggler.vue';

@Component({
  components: {
    Menu,
    BtnColorToggler,
  },
})

export default class App extends Vue {
  mobileMenu: boolean = false;

  // https://github.com/vuejs/vue-class-component#undefined-will-not-be-reactive
  // 'undefined as any' bypasses type checking
  private $_static: IMenuName = undefined as any; // eslint-disable-line camelcase

  created() {
    this.$_static = MenuName;

    window.addEventListener('resize', this.checkViewportSize);

    this.checkViewportSize();
    console.log('app');
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.checkViewportSize);
  }

  checkViewportSize() {
    const width: number = window.innerWidth;
    this.mobileMenu = window.matchMedia('(max-width: 37.5em)').matches;

    if (window.matchMedia('(max-width: 37.5em)').matches) {
      console.log('mq matched: ', width);
    } else {
      console.log('mq NOT matched: ', width);
    }
  }
}
</script>

<style lang="scss">
html {
  @include font-primary;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  color: #2c3e50;
  text-align: center;

  @media (max-height: 23.75em) {  // 0 ~ 380px
    padding: 60px 0;
  }
}

button {
  padding: 0.625em 0.938em;
  font-size: 1rem;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  box-shadow: 0 0.188rem 0.313rem 0.063rem rgba(0, 0, 0, 0.22);
}

a {
  display: inline-block;
  text-decoration: none;

  &::after {
    display: block;
    width: 0;
    height: 0.188rem;
    content: '';
    transition: 0.25s cubic-bezier(0.7, 0.05, 0.4, 1);
  }

  &:hover::after {
    width: 100%;
  }
}

h1 {
  @include font-secondary;

  margin: 0;
  margin-top: 0.6em;
  font-size: 3.3rem;
  font-weight: normal;
  line-height: 1em;
  letter-spacing: 0.15em;

  @media #{$mq-header-esm} {
    font-size: scalable-font-size(3.3rem, 1.5rem, $bp-header-esm, $bp-header-sm);
  }

  @media #{$mq-header-sm} {
    font-size: scalable-font-size(4.8rem, 0.75rem, $bp-header-sm, $bp-header-md);
  }

  @media #{$mq-header-md} {
    font-size: scalable-font-size(6rem, 1.2rem, $bp-header-md, $bp-header-lg);
  }

  @media #{$mq-header-lg} {
    font-size: max-font-size(6rem, 1.2rem);
  }
}

h2 {
  @include font-secondary;

  margin: 0.4em 0 0 0;
  font-size: 1.86rem;
  font-weight: normal;

  @media #{$mq-header-esm} {
    font-size: scalable-font-size(1.86rem, 0.7rem, $bp-header-esm, $bp-header-sm);
  }

  @media #{$mq-header-sm} {
    font-size: scalable-font-size(2.56rem, 0.3rem, $bp-header-sm, $bp-header-md);
  }

  @media #{$mq-header-md} {
    font-size: scalable-font-size(2.9rem, 1rem, $bp-header-md, $bp-header-lg);
  }

  @media #{$mq-header-lg} {
    font-size: max-font-size(2.9rem, 1rem);
  }
}
</style>
