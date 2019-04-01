<template>
  <HoverPopover
    :content="'Toggles sub-pages bg-color'"
    class="color-toggler"
  >
    <button
      type="button"
      class="btn-color-toggler"
      :class="btnToggled ? 'toggled-moon' : 'toggled-sun'"
      @click="btnToggled = !btnToggled"
    >
      <font-awesome-icon icon="sun" class="btn-color-toggler__sun"/>
      <font-awesome-icon icon="moon" class="btn-color-toggler__moon"/>
    </button>
  </HoverPopover>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HoverPopover from '@/components/HoverPopover.vue';

@Component({
  components: {
    HoverPopover,
  },
})
export default class BtnColorToggler extends Vue {
  btnToggled: boolean = false;
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

.color-toggler {
  margin-top: 2rem;
}

.btn-color-toggler {
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

.toggled-sun .btn-color-toggler__sun,
.toggled-moon .btn-color-toggler__moon {
  color: #fff;
  transition: 1s ease;
}

.toggled-sun::after {
  right: 53%;
  left: 0;
  background-image: linear-gradient(#b6b6b6, #404040);
}

.toggled-moon::after {
  right: 0;
  left: 53%;
  background-image: linear-gradient(#a7a7a7, #404040);
}
</style>
