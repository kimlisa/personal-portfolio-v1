<template>
  <div class="about">
    <Cover
      title="about me"
      subtitle="a piece of myself"
    />
    <Bio/>
    <Skills />
    <Fact />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cover from '@/components/SubPageCover.vue';
import Bio from '@/components/AboutBio.vue';
import Skills from '@/components/AboutSkills.vue';
import Fact from '@/components/AboutFact.vue';

@Component({
  components: {
    Cover,
    Bio,
    Skills,
    Fact,
  },
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
::v-deep .about-bio {
  padding-top: 0;
}
</style>
