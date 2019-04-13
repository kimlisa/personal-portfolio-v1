<template>
  <section class="project-others">
    <h3>other projects</h3>
    <div class="project-others__container">
      <ProjectCard>
        <template v-slot:links>
          <ProjectLinks
            gitHub="https://github.com/kimlisa/personal-portfolio-v1"
            demo="https://kimlisa.me"
          />
        </template>
        <template v-slot:header>
          Personal Website V1
        </template>
        <template v-slot:description>
          Designed and developed as a single page application.
          Used as a playground for researching, applying, practicing
          frontend tools and advanced CSS concepts.
        </template>
        <template v-slot:tools>
          <li>Vue.js</li>
          <li>TypeScript</li>
          <li>AJAX</li>
          <li>SCSS</li>
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:links>
          <ProjectLinks
            gitHub="https://github.com/hwsc-org/hwsc-org.github.io"
            demo="https://hwsc-org.github.io/"
          />
        </template>
        <template v-slot:header>
          HWSC Wiki
        </template>
        <template v-slot:description>
          A simple static website to store documentations for HWSC App. Has features such as
          creating pages using GitHub mark down language and scan pages headers into
          table of contents.
        </template>
        <template v-slot:tools>
          <li>Jekyll</li>
          <li>Bootstrap</li>
          <li>GitHub Pages</li>
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:links>
          <ProjectLinks
            gitHub="https://github.com/kimlisa/js-calculator"
            demo="https://js-calc-2017.surge.sh/"
          />
        </template>
        <template v-slot:header>
          JavaScript Calculator
        </template>
        <template v-slot:description>
          Simple calculator built in 2017, to practice beginner HTML, CSS,
          JS, and DOM manipulation.
        </template>
        <template v-slot:tools>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </template>
      </ProjectCard>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectLinks from '@/components/ProjectLinks.vue';
import ProjectCard from '@/components/ProjectCard.vue';

@Component({
  components: {
    ProjectLinks,
    ProjectCard,
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    grid-gap: 2em 1em;
  }
}
</style>
