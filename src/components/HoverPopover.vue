<template>
  <div
    class="hover-popover"
    :class="showPopover ? 'hover-popover--visible' : ''"
    :data-popover-content="content"
  >
    <div
      class="hover-popover__wrapper"
      @mouseover="showPopover = true"
      @mouseleave="showPopover = false"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HoverPopover extends Vue {
  @Prop(String) readonly content!: string;

  showPopover: boolean = false;
}

</script>

<style lang="scss" scoped>
.hover-popover {
  position: relative;

  /* display: inline-block; */

  /* line-height: 0; */
  line-height: 0.81em;
}

.hover-popover::before {
  @include font-tertiary;

  position: absolute;
  left: 0;
  padding: 0.86em 0.8em;
  margin-top: -3.1em;
  margin-left: 50%;
  font-size: 0.94rem;
  color: white;
  white-space: nowrap;
  content: attr(data-popover-content);
  background: #00675f;
  border-radius: 0.266rem;
  opacity: 0;
  transform: translateX(-50%);
}

/* .hover-popover::after {
  position: absolute;
  display: block;
  margin-top: -65%;
  margin-left: 50%;
  content: '';
  border-top: 0.532rem solid $color-bg;
  border-right: 0.532rem solid transparent;
  border-left: 0.532rem solid transparent;
  opacity: 1;
  transform: translateX(-50%);
} */

/* .hover-popover--visible:hover::after, */
.hover-popover--visible:hover::before {
  opacity: 1;
  transition: 0.21s ease;
}

.hover-popover__wrapper {
  width: fit-content;
  margin: 0 auto;
}

</style>
