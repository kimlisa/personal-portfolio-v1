<template>
  <button
    type="button"
    class="btn-color-toggler"
    :class="[
      btnToggled ? 'toggled-moon' : 'toggled-sun',
      vertical ? 'btn--vertical' : 'btn--default',
      flatDesign ? 'btn--2D' : 'btn--3D'
    ]"
    @click="toggleButton"
  >
    <font-awesome-icon icon="sun" class="btn-color-toggler__sun"/>
    <font-awesome-icon icon="moon" class="btn-color-toggler__moon"/>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { MenuName } from '@/consts/consts';

@Component
export default class BtnColorToggler extends Vue {
  @Prop(Boolean) readonly toggleState!: boolean;

  @Prop(Boolean) readonly vertical!: boolean;

  @Prop(Boolean) readonly flatDesign!: boolean;

  btnToggled: boolean = this.toggleState;

  @Watch('toggleState')
  onToggleChanged(newState: boolean) {
    this.btnToggled = newState;
  }

  created() {
    // determine if browser is safari
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      this.removeFontSizeRule();
    }
  }

  toggleButton() {
    this.btnToggled = !this.btnToggled;
    this.$emit('color-toggled', this.btnToggled);
  }

  // Fixes Safari zoom bug by removing font-size property from .svg-inline--fa:
  removeFontSizeRule = () => {
    const rootStyle: CSSStyleSheet = document.styleSheets[0] as CSSStyleSheet;
    if (rootStyle == null) {
      return;
    }

    const targetStyle: CSSStyleRule = rootStyle.cssRules[1] as CSSStyleRule;
    if (targetStyle == null || targetStyle.selectorText !== '.svg-inline--fa') {
      return;
    }

    const targetCSS: CSSStyleDeclaration = targetStyle.style;
    if (targetCSS == null) {
      return;
    }

    targetCSS.removeProperty('font-size');
  }
}
</script>

<style lang="scss" scoped>
$spacing-toggle-icon: 0.28em;

%shared-toggle-icon {
  position: absolute;
  top: 0;
  z-index: 1;
  margin-top: $spacing-toggle-icon;
}

.btn-color-toggler {
  position: relative;
  width: 3.7em;
  height: 1.7em;
  padding: 0;
  font-size: 1em;
  color: #a7a7a7;
  background: #d1d1d1;
  border-color: #777;
  border-radius: 2em;

  &:focus {
    outline: none;
  }

  &::after {
    position: absolute;
    top: 0.08em;
    display: block;
    width: 1.44em;
    height: 1.44em;
    content: '';
    background-color: #4d4d4d;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }

  .btn-color-toggler__sun {
    left: 0;
    margin-left: $spacing-toggle-icon;

    @extend %shared-toggle-icon;
  }

  .btn-color-toggler__moon {
    right: 0;
    margin-right: $spacing-toggle-icon;

    @extend %shared-toggle-icon;
  }

  &.toggled-sun::after {
    right: 0;
    left: 2%;
  }

  &.toggled-moon::after {
    right: 0;
    left: 58%;
  }
}

.btn--3D {
  width: 3.2em;
  height: 1.49em;
  font-size: 1.7em;

  &::after {
    top: 0;
    box-shadow: -0.1rem 0.06rem 0.15rem 0.063rem rgba(0, 0, 0, 0.82);
  }

  .btn-color-toggler__sun,
  .btn-color-toggler__moon {
    margin-top: 0.2em;
  }

  .btn-color-toggler__sun {
    margin-left: 0.2em;
  }

  .btn-color-toggler__moon {
    margin-right: 0.2em;
  }

  &.toggled-sun::after {
    left: 0;
    background-image: linear-gradient(#b6b6b6, #404040);
  }

  &.toggled-moon::after {
    left: 57%;
    background-image: linear-gradient(#a7a7a7, #404040);
  }
}

.toggled-sun .btn-color-toggler__sun,
.toggled-moon .btn-color-toggler__moon {
  color: #fff !important;
  transition: 1s ease;
}

.btn--vertical {
  width: 1.75em;
  height: 3.7em;
  margin-bottom: 1.3em;
  font-size: 0.9em;
  color: #b1b1b1;
  border-color: silver;

  &::after {
    width: 1.5em;
    height: 1.5em;
    background: #999;
  }

  .btn-color-toggler__sun {
    top: 0;
  }

  .btn-color-toggler__moon {
    top: auto;
    bottom: 0.28em;
  }

  &.toggled-sun::after {
    top: 1%;
    right: 0;
    bottom: 60%;
    left: 0.09em;
  }

  &.toggled-moon::after {
    top: 56%;
    right: 0;
    bottom: 0;
    left: 0.09em;
  }
}

</style>
