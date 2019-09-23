<template>
  <section class="project-featured">
    <h3>featured project</h3>
    <h4>Humpback Whale Social Call</h4>
    <h5>Full Stack Dev (Jan 2018 ~ Jun 2019)</h5>
    <div class="project-featured__container">
      <div class="project-featured__container__left">
        <p class="p--first">
          A web application (still in development) that biologists can use to consolidate
          and to track data about humpback whales and other marine mammals.
          One of core contributor and member since inception of application.
          Image is of a prototype.
        </p>
        <Tabs/>
      </div>
      <div class="project-featured__container__right">
        <img src="../assets/hwsc.svg">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {
    Tabs,
  },
})
export default class ProjectFeatured extends Vue {}
</script>

<style lang="scss" scoped>
.project-featured {
  @include subpage-section-wrapper;

  &__container {
    @include flex-between;

    align-items: flex-start;

    &__left {
      flex-basis: 24em;
      margin-right: $margin-flex-spacing;
    }

    &__right {
      flex-basis: 28em;

      img {
        width: 100%;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .p--first {
    margin-bottom: 2.5em;
  }
}

</style>
