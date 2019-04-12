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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  // props
  @Prop(String) readonly title!: string;

  @Prop(String) readonly subtitle!: string;

  // reactive states
  showCover: boolean = true;

  // static states
  private $_coverElement: HTMLElement = undefined as any; // eslint-disable-line camelcase

  private $_coverRectDiff: number = undefined as any; // eslint-disable-line camelcase

  @Watch('$route')
  onRouteChange() {
    this.$_coverElement.style.opacity = '1';
  }

  // lifecycle hooks
  mounted() {
    this.$_coverElement = this.$refs.cover as HTMLElement;
    this.$_coverRectDiff = 170;

    window.addEventListener('scroll', () => {
      const cover = this.$_coverElement.getBoundingClientRect();
      const currRectDiff = cover.bottom + cover.top;

      if (currRectDiff >= this.$_coverRectDiff) {
        this.$_coverElement.style.opacity = '1';
      } else {
        this.$_coverElement.style.opacity = '0';
      }
    });
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
  font-size: 5em;
  letter-spacing: 0.05em;
}

h2 {
  margin-top: 1em;
  font-size: 2em;
}

.cover__titles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-top: -4.5em;
  transition: opacity 0.65s linear;
}

</style>
