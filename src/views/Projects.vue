<template>
  <div class="projects">
    <Cover
      title="projects"
      subtitle="some things i've built"
    />
    <ProjectFeatured/>
    <ProjectOthers/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cover from '@/components/SubPageCover.vue';
import ProjectFeatured from '@/components/ProjectFeatured.vue';
import ProjectOthers from '@/components/ProjectOthers.vue';

@Component({
  components: {
    Cover,
    ProjectFeatured,
    ProjectOthers,
  },
})
export default class Projects extends Vue {}
</script>

<style lang="scss" scoped>
::v-deep .project-featured {
  padding-top: 0;
}
</style>
