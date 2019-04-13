<template>
  <section class="project-featured">
    <h3>featured project</h3>
    <h4>Humpback Whale Social Call</h4>
    <h5>Full Stack Developer, Frontend Lead</h5>
    <div class="project-featured__container">
      <div class="project-featured__container__left">
        <p class="p--first">
          A web app still in development that stores and filters data about Humpback Whales.
          Public users can search through the database using advanced filter settings. Users with
          accounts can upload/delete files and control privacy settings on files.
          <a href="https://hwsc-org.github.io/" target="_blank">Learn More</a>
        </p>
        <h6>Some Tools Used:</h6>
        <ul class="ul--grid">
          <li>Vue.js</li>
          <li>TypeScript</li>
          <li>Golang</li>
          <li>gRPC</li>
          <li>PostgresSQL</li>
          <li>Microservice</li>
          <li>Docker</li>
          <li>Azure Services</li>
          <li>...and more</li>
        </ul>
        <ProjectLinks
          gitHub="https://github.com/hwsc-org"
          demo="https://hwsc-org.github.io/"
        />
      </div>
      <div class="project-featured__container__right">
        <img src="../assets/hwsc.svg">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectLinks from '@/components/ProjectLinks.vue';

@Component({
  components: {
    ProjectLinks,
  },
})
export default class ProjectFeatured extends Vue {

}
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

    .ul--grid {
      grid-template-columns: minmax(5.1em, auto) minmax(9em, auto) minmax(1em, auto);
      margin-bottom: 3em;
      font-size: 0.8em;

      @include font-tertiary;
    }

    li {
      margin-bottom: 0.4em;
    }

    li::before {
      @media screen and (max-width: 25em) {
        margin-right: 0.1em;
      }
    }

    ::v-deep .project-links {
      margin-left: -0.36em;
    }
  }
}

</style>
