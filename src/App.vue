<template>
  <div id="app">
    <div class="app__nav">
      <Menu :mobileMenu="mobileMenu"/>
    </div>
    <div class="app__content">
      <router-view/>
    </div>
    <div class="app__footer">
      <p>Designed and Built by Lisa Kim, 2019</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/components/Menu.vue';

@Component({
  components: {
    Menu,
  },
})

export default class App extends Vue {
  mobileMenu: boolean = false;

  created() {
    window.addEventListener('resize', (evt) => {
      this.checkViewportSize();
    });

    this.checkViewportSize();
    console.log('app');
  }

  checkViewportSize() {
    const width: number = window.innerWidth;
    this.mobileMenu = width <= 600;
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 100%;
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
}

button {
  padding: 0.625em 0.938em;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  box-shadow: 0 0.188rem 0.313rem 0.063rem rgba(0, 0, 0, 0.12);
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
</style>
