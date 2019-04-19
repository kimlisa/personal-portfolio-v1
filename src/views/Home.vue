<template>
  <div class="home" ref="home">
    <div class="home__bg">
      <transition
        name="slide-in-left"
        appear
        v-if="showBgTrans"
        @beforeEnter="disableHorizontalScroll"
        @afterEnter="showTitleTrans = true; enableHorizontalScroll()"
        @beforeLeave="beforeLeave"
        @afterLeave="enableHorizontalScroll"
        @leave="onLeave"
        :leave-to-class="!colorToggled ? 'slide-in-left-leave-to' : ''"
      >
        <div class="home__bg__left" ref="bgLeft"></div>
      </transition>
      <transition
        name="slide-in-right"
        appear
        v-if="showBgTrans"
        :leave-to-class="colorToggled ? 'slide-in-right-leave-to' : ''"
      >
        <div class="home__bg__right" ref="bgRight"></div>
      </transition>
    </div>
    <div class="home__title">
      <transition
        name="fade-in-top"
        @afterEnter="afterShowButtonMenu"
      >
        <div
          class="home__title__left"
          v-if="showTitleTrans"
        >
          <h1>LISA</h1>
          <h2>Software</h2>
        </div>
      </transition>
      <transition name="fade-in-bottom">
        <div class="home__title__right" v-if="showTitleTrans">
          <h1><span class="home__title__spacer">&nbsp;</span>KIM</h1>
          <h2>Engineer</h2>
        </div>
      </transition>
    </div>
      <div class="color-toggler__wrapper">
        <transition name="fade">
          <HoverPopover
            :content="'Toggles sub-pages bg-color'"
            v-if="showTogglerTrans"
          >
            <BtnColorToggler
              :smallBtn="false"
              :toggleState="colorToggled"
              @color-toggled="$emit('color-toggled', $event)"
            />
          </HoverPopover>
        </transition>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HoverPopover from '@/components/HoverPopover.vue';
import BtnColorToggler from '@/components/BtnColorToggler.vue';

@Component({
  components: {
    HoverPopover,
    BtnColorToggler,
  },
})
export default class Home extends Vue {
  @Prop(Boolean) readonly colorToggled!: boolean;

  @Prop(Boolean) readonly leaveHome!: boolean;

  showTitleTrans: boolean = false;

  showTogglerTrans: boolean = false;

  get showBgTrans() {
    return this.$route.name === 'home' && !this.leaveHome;
  }

  $refs!: {
    bgLeft: HTMLElement,
    bgRight: HTMLElement,
  };

  beforeLeave() {
    this.disableHorizontalScroll();
    this.setBgZIndex();
    this.showTitleTrans = false;
    this.$emit('showMenuTrans', false);
    this.showTogglerTrans = false;
  }

  onLeave() {
    // alternative to afterLeave transition state
    // latter causes flicker at end of afterLeave state
    setTimeout(() => { this.$emit('leaveHomeFinalize', true); }, 300);
  }

  afterShowButtonMenu() {
    this.$emit('showMenuTrans', true);
    setTimeout(() => { this.showTogglerTrans = true; }, 200);
  }

  setBgZIndex() {
    // reset
    this.$refs.bgRight.style.zIndex = '0';
    this.$refs.bgLeft.style.zIndex = '0';

    // set
    const bg: HTMLElement = this.colorToggled ? this.$refs.bgRight : this.$refs.bgLeft;
    bg.style.zIndex = '1';
  }

  disableHorizontalScroll = () => {
    document.documentElement.style.overflowX = 'hidden';
  };

  enableHorizontalScroll = () => {
    document.documentElement.style.overflowX = 'auto';
  };
}
</script>

<style lang="scss" scoped>
.home__bg {
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  width: 100%;
  height: 100vh;

  /* will-change: transform; */

  &__left {
    width: 50%;
    height: 100vh;
    background-color: $color-toggle-light-bg;

    /* will-change: transform; */
  }

  &__right {
    width: 50%;
    height: 100vh;
    background-color: $color-toggle-dark-bg;

    /* will-change: transform; */
  }
}

.home__title {
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 37.5em) {
    margin-top: -3em;
  }
}

.home__title__spacer {
  word-spacing: 0.268em;
}

.color-toggler__wrapper {
  height: 2.5em;
  margin-top: 2rem;
}

h1 {
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
