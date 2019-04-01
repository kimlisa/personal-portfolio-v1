<template>
  <div class="home">
    <div class="home__bg">
      <div class="home__bg__left"></div>
      <div class="home__bg__right"></div>
    </div>
    <div class="home__title">
      <div class="home__title__left">
        <h1>LISA</h1>
        <h2>Software</h2>
      </div>
      <div class="home__title__right">
        <h1><span class="home__title__spacer">&nbsp;</span>KIM</h1>
        <h2>Engineer</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

}
</script>

<style lang="scss" scoped>
.home__bg {
  position: fixed;
  top: 0;
  z-index: -1;
  display: flex;

  div {
    width: 50vw;
    height: 100vh;
  }
}

.home__bg__left {
  background: $color-toggle-light-bg;
}

.home__bg__right {
  background: $color-toggle-dark-bg;
}

.home__title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__title__spacer {
  word-spacing: 0.268em;
}

.home__title__left {
  width: 100%;
  text-align: right;

  h1 {
    padding-right: 0.12em;
    color: $color-toggle-light-bg-h1;
  }

  h2 {
    padding-right: 0.58em;
    color: $color-toggle-light-bg-h2;
  }
}

.home__title__right {
  width: 100%;
  text-align: left;

  h1 {
    padding-left: 0.12em;
    color: $color-toggle-dark-bg-h1;
  }

  h2 {
    padding-left: 0.58em;
    color: $color-toggle-dark-bg-h2;
  }
}

@media (max-width: 320px) {
  .home__title {
    justify-content: flex-start;
  }
}

</style>
