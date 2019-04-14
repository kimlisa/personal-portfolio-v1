<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <slot/>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { IMenuName, MenuName } from '@/consts/consts';


@Component
export default class Menu extends Vue {

}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

</style>
