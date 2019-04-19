<template>
  <div class="projects" v-show="showContent">
    <Cover
      title="projects"
      subtitle="some things i've built"
    />
    <ProjectFeatured/>
    <ProjectOthers/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
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
export default class Projects extends Vue {
  @Prop(Boolean) readonly showContent!: boolean
}
</script>

<style lang="scss" scoped>
::v-deep .project-featured {
  padding-top: 0;
}

@media screen and (max-width: 50.688em) {
  ::v-deep .project-others h3 {
    text-align: center;
  }
}

@media screen and (max-width: 50em) {
  ::v-deep .project-featured__container {
    flex-wrap: wrap-reverse;

    div {
      flex-basis: 100%;
      margin: 0;
    }

    img {
      margin-bottom: 2em;
    }
  }
}

@media screen and (max-width: 21.875em) {
  ::v-deep .project-others__container {
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  }

  ::v-deep .project-featured__container {
    .ul--grid {
      grid-template-columns: minmax(9em, auto) minmax(9em, auto);
    }
  }
}

</style>
