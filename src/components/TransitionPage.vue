<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
  >
    <slot/>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';


@Component
export default class Menu extends Vue {
  transitionName: string = '';

  transitionMode: string = '';

  created() {
    this.$router.beforeEach((to, from, next) => {
      if (to.name === MenuName.HOME || from.name === MenuName.HOME) {
        this.transitionName = '';
        this.transitionMode = '';
      } else {
        this.transitionName = 'fade';
        this.transitionMode = 'out-in';
      }
      next();
    });
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

</style>
