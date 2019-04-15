<template>
  <div class="home">
    <div class="home__bg">
      <transition name="slide-in-left" appear @afterEnter="afterShowTitle">
        <div class="home__bg__left"></div>
      </transition>
      <transition name="slide-in-right" appear>
        <div class="home__bg__right"></div>
      </transition>
    </div>
    <div class="home__title">
      <transition name="slide-in-top" @afterEnter="afterShowButtonMenu">
        <div class="home__title__left" v-if="showTitleTrans">
          <h1>LISA</h1>
          <h2>Software</h2>
        </div>
      </transition>
      <transition name="slide-in-bottom">
        <div class="home__title__right" v-if="showTitleTrans">
          <h1><span class="home__title__spacer">&nbsp;</span>KIM</h1>
          <h2>Engineer</h2>
        </div>
      </transition>
    </div>
    <transition name="fade-in-bottom">
      <HoverPopover
        :content="'Toggles sub-pages bg-color'"
        class="color-toggler"
      >
        <BtnColorToggler
          v-if="showTogglerTrans"
          :smallBtn="false"
          :toggleState="colorToggled"
          @color-toggled="$emit('color-toggled', $event)"/>
      </HoverPopover>
    </transition>
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

  showTitleTrans: boolean = false;

  showTogglerTrans: boolean = false;

  afterShowTitle() {
    this.showTitleTrans = true;
  }

  afterShowButtonMenu() {
    this.showTogglerTrans = true;
    this.$emit('showMenuTrans');
  }
}
</script>

<style lang="scss" scoped>
.home {
}

.home__bg {
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  width: 100%;
  height: 100vh;
  background: #e1e1e1;

  &__left {
    width: 50%;
    height: 100vh;
    background-color: $color-toggle-light-bg;
  }

  &__right {
    width: 50%;
    height: 100vh;
    background-color: $color-toggle-dark-bg;
  }
}

.home__title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__title__spacer {
  word-spacing: 0.268em;
}

.color-toggler {
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

.slide-in-left-enter,
.slide-in-right-enter,
.slide-in-top-enter,
.slide-in-bottom-enter,
.fade-in-bottom-enter {
  opacity: 0;
}

.slide-in-left-enter,
.slide-in-right-leave-to {
  transform: translateX(-100%);
}

.slide-in-left-leave-to,
.slide-in-right-enter {
  transform: translateX(100%);
}

.slide-in-left-enter-active,
.slide-in-left-leave-active,
.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: 0.5s ease-out;
}

.slide-in-top-enter,
.slide-in-bottom-leave-to,
.fade-in-bottom-leave-to {
  transform: translateY(-100%);
}

.slide-in-bottom-enter,
.slide-in-top-leave-to,
.fade-in-bottom-enter {
  transform: translateY(100%);
}


.slide-in-top-enter-active,
.slide-in-top-leave-active,
.slide-in-bottom-enter-active,
.slide-in-bottom-leave-active {
  transition: 0.5s ease-out;
}



</style>
