<template>
  <div class="cover">
    <div
      class="cover__titles"
      ref="cover"
    >
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';

@Component
export default class SubPageCover extends Vue {
  // props
  @Prop(String) readonly title!: string;

  @Prop(String) readonly subtitle!: string;

  // static states
  private $_coverElement: HTMLElement = undefined as any; // eslint-disable-line camelcase

  private $_coverRectDiff: number = undefined as any; // eslint-disable-line camelcase

  // lifecycle hooks
  activated() {
    this.$_coverElement.style.opacity = '1';
    window.addEventListener('scroll', this.toggleCoverOpacity);
  }

  deactivated() {
    window.removeEventListener('scroll', this.toggleCoverOpacity);
  }

  mounted() {
    this.$_coverElement = this.$refs.cover as HTMLElement;
    this.$_coverRectDiff = 170;

    window.addEventListener('scroll', this.toggleCoverOpacity);
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.toggleCoverOpacity);
  }

  toggleCoverOpacity() {
    if (window.scrollY === 0) return;
    const cover = this.$_coverElement.getBoundingClientRect();
    const currRectDiff = cover.bottom + cover.top;

    if (currRectDiff >= this.$_coverRectDiff) {
      this.$_coverElement.style.opacity = '1';
    } else {
      this.$_coverElement.style.opacity = '0';
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
  font-size: 3.5em;
  letter-spacing: 0.05em;

  @media screen and (min-width: 561px) {
    font-size: scalable-font-size(5rem, 2rem, $bp-menu-nav, $bp-header-lg);
  }

  @media #{$mq-header-lg} {
    font-size: max-font-size(5rem, 2rem);
  }
}

h2 {
  margin-top: 1em;

  /* font-size: 2em; */
  font-size: 1.4em;

  @media screen and (min-width: 560px) {
    font-size: scalable-font-size(1.7rem, 1rem, $bp-menu-nav, $bp-header-lg);
  }

  @media #{$mq-header-lg} {
    font-size: max-font-size(1.7rem, 1rem);
  }
}

.cover__titles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-top: -4.5em;
  transition: opacity 0.65s linear;

  @media screen and (max-width: 37.5em) {
    margin-top: -2em;
    margin-bottom: 2em;
  }
}
</style>
