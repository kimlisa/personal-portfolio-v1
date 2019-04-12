<template>
  <section class="project-others">
    <h3>other projects</h3>
    <div class="project-others__container">
      <div class="project-others__card">
        <ProjectLinks
          gitHub="https://github.com/hwsc-org"
          demo="https://hwsc-org.github.io/"
        />
        <h5>Personal Website V1</h5>
        <p>
          Designed and developed as a single page application.
          Used as a playground for researching, applying, practicing
          frontend tools and advanced CSS concepts.
        </p>
        <ul class="project-others__card__tool-list">
          <li>Vue.js</li>
          <li>TypeScript</li>
          <li>AJAX</li>
          <li>SCSS</li>
        </ul>
      </div>
      <div class="project-others__card">
        <ProjectLinks
          gitHub="https://github.com/hwsc-org"
          demo="https://hwsc-org.github.io/"
        />
        <h5>HWSC Wiki</h5>
        <p>
          A simple static website to store documentations for HWSC App. Has features such as table of contents and
          creating pages using GitHub mark down language.
        </p>
        <ul class="project-others__card__tool-list">
          <li>Jekyll</li>
          <li>Bootstrap</li>
          <li>GitHub Pages</li>
        </ul>
      </div>
      <div class="project-others__card">
        <ProjectLinks
          gitHub="https://github.com/hwsc-org"
          demo="https://hwsc-org.github.io/"
        />
        <h5>JavaScript Calculator</h5>
        <p>
          Simple calculator built in 2017, to practice beginner HTML, CSS,
          JS, and DOM manipulation.
        </p>
        <ul class="project-others__card__tool-list">
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
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
export default class ProjectOthers extends Vue {

}
</script>

<style lang="scss" scoped>
.project-others {
  @include subpage-section-wrapper;

  text-align: right;

  &__container {
    @include flex-between;

    align-items: stretch;
  }

  &__card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 15.6em;
    padding: 1.5em;
    font-size: 0.94em;
    text-align: left;
    border-radius: 4px;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);

    p {
      flex-grow: 1;
      margin-bottom: 1.8em;
      line-height: 1.5em;
    }

    h5 {
      margin: 0.6em 0 0 0;
      font-size: 1.46em;
    }

    ul {
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      padding-left: 0;
      margin-bottom: 0;
      font-size: 0.8em;
      line-height: 1.7em;

      @include font-tertiary;

      li {
        margin: 0 1.4em 0 0;
      }

      li::before {
        margin: 0;
        content: '';
      }
    }
  }
}
</style>
