<template>
  <div class="error-404">
    <Cover
      title="404"
      subtitle="page not found"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cover from '@/components/SubPageCover.vue';

@Component({
  components: {
    Cover,
  },
})
export default class ErrorPageNotFound extends Vue {}
</script>

<style lang="scss" scoped>
.error-404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 6.7em);
}

.error-404__number {
  margin-top: 0;
  margin-bottom: 0.3em;
  font-size: 9em;
  font-weight: 600;
  line-height: 1em;
}

.error-404__text {
  display: block;
  width: 100%;
  margin-top: 0;
  font-size: 2em;
  line-height: 1em;
}
</style>
