<template>
  <div>
    <h6>Some Tools Used:</h6>
    <ul class="ul--grid">
      <li>Vue.js</li>
      <li>TypeScript</li>
      <li>Golang</li>
      <li>gRPC</li>
      <li>PostgresSQL</li>
      <li>Envoy Proxy</li>
      <li>Docker</li>
      <li>Azure Services</li>
      <li>...and more</li>
    </ul>
    <ProjectLinks
      gitHub="https://github.com/hwsc-org"
      demo="https://hwsc-org.github.io/"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectLinks from '@/components/ProjectLinks.vue';

@Component({
  components: {
    ProjectLinks,
  },
})
export default class TabsHwscTools extends Vue {}
</script>

<style lang="scss" scoped>
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
</style>
