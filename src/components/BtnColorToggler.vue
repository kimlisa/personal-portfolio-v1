<template>
  <button
    type="button"
    class="btn-color-toggler"
    :class="[
      btnToggled ? 'toggled-moon' : 'toggled-sun',
      smallBtn ? 'btn--small' : 'btn--default'
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

  @Prop(Boolean) readonly smallBtn!: boolean;

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
$spacing-toggle-icon: 0.34rem;

%shared-toggle-icon {
  position: absolute;
  top: 0;
  z-index: 1;
  margin-top: $spacing-toggle-icon;
}

.btn--default {
  position: relative;
  width: 4.5rem;
  height: 2.125rem;
  padding: 0;
  font-size: 1.35rem;
  color: #a7a7a7;
  background: #d1d1d1;
  border-color: #777;
  border-radius: 1.875rem;

  &:focus {
    outline: none;
  }

  &::after {
    position: absolute;
    top: 0;
    display: block;
    width: 2.063rem;
    height: 2.063rem;
    content: '';
    background: #4d4d4d;
    border-radius: 50%;
    box-shadow: -0.1rem 0.06rem 0.15rem 0.063rem rgba(0, 0, 0, 0.82);
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
    right: 53%;
    left: 0;
    background-image: linear-gradient(#b6b6b6, #404040);
  }

  &.toggled-moon::after {
    right: 0;
    left: 53%;
    background-image: linear-gradient(#a7a7a7, #404040);
  }
}

.toggled-sun .btn-color-toggler__sun,
.toggled-moon .btn-color-toggler__moon {
  color: #fff !important;
  transition: 1s ease;
}

.btn--small {
  position: relative;
  padding: 0.36rem 0.32rem;
  margin-bottom: 1.4em;
  font-size: 0.9rem;
  color: #b1b1b1;
  text-align: center;
  border-radius: 1rem;
  box-shadow: none;

  &::after {
    position: absolute;
    left: 0.04rem;
    display: block;
    width: 1.43rem;
    height: 1.43rem;
    content: '';
    background: #999;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }

  svg {
    position: relative;
    z-index: 1;
    display: block;
  }

  svg:first-child {
    margin-bottom: 1rem;
  }

  .btn-color-toggler__sun {
    top: 0;
  }

  .btn-color-toggler__moon {
    bottom: 0;
  }

  &.toggled-sun::after {
    top: 0.16rem;
    bottom: 60%;
  }

  &.toggled-moon::after {
    top: 58%;
    bottom: 0;
  }
}
</style>
