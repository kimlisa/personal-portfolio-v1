<template>
  <div class="home">
    <div class="home__bg">
      <div class="home__bg__left"></div>
      <div class="home__bg__right"></div>
    </div>
    <div class="home__title">
      <div class="home__title__left">
        <p>FIRST</p>
        <p>Software</p>
      </div>
      <div class="home__title__right">
        <p>LASTT</p>
        <p>Engineer</p>
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
  allowHomeScrolling: boolean = false;

  mounted() {
    console.log('home:', this.allowHomeScrolling);
  }
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
  background: #fff;
}

.home__bg__right {
  background: #000;
}

.home__title {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
