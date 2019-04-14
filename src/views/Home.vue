<template>
  <div class="home">
    <div class="home__title">
      <transition name="slide-in-left" appear>
        <div class="home__title__left">
          <h1>LISA</h1>
          <h2>Software</h2>
        </div>
      </transition>
      <transition name="slide-in-right" appear>
        <div class="home__title__right">
          <h1><span class="home__title__spacer">&nbsp;</span>KIM</h1>
          <h2>Engineer</h2>
        </div>
      </transition>
    </div>
    <HoverPopover
      :content="'Toggles sub-pages bg-color'"
      class="color-toggler"
    >
      <BtnColorToggler
        :smallBtn="false"
        :toggleState="colorToggled"
        @color-toggled="$emit('color-toggled', $event)"/>
    </HoverPopover>
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
}
</script>

<style lang="scss" scoped>
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

.slide-in-left-enter {
  transform: translateX(-100%);
}

.slide-in-right-leave-to {
  transform: translate(-100%);
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
</style>
