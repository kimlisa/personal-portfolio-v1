<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    @beforeLeave="afterLeave"
    @beforeEnter="beforeEnter"
  >
    <slot/>
  </transition>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';


@Component
export default class Menu extends Vue {
  @Prop(Boolean) readonly leaveHomeFinalize!: boolean;

  transitionName: string = 'fade';

  transitionMode: string = 'out-in';

  nextHolder: Function = undefined as any;

  @Watch('leaveHomeFinalize')
  onLeaveHomeFinalize() {
    if (this.nextHolder != null) {
      this.nextHolder();
    }
  }

  created() {
    this.$router.beforeEach((to, from, next) => {
      if (to.name === MenuName.HOME) {
        this.$emit('showMenuTrans', false);
        this.transitionName = '';
        next();
      } else if (from.name === MenuName.HOME) {
        this.$emit('leaveHomeStart');
        this.nextHolder = next;
      } else {
        this.transitionName = 'fade';
        next();
      }
    });
  }

  afterLeave() {
    if (this.$route.name !== 'home') return;
    this.$emit('resetHome');
  }

  beforeEnter() {
    if (this.$route.name === 'home') return;
    this.$emit('showMenuTrans', true);
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave,
.fade-leave-to {
  opacity: 0;
}
</style>
