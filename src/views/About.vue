<template>
  <div class="about" v-show="showContent">
    <Cover
      title="about"
      subtitle="me, her, she"
    />
    <Bio/>
    <Skills />
    <Fact />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
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
export default class About extends Vue {
  @Prop(Boolean) readonly showContent!: boolean
}
</script>

<style lang="scss" scoped>
::v-deep .about-bio {
  padding-top: 0;
}

@media screen and (max-width: 50em) {
  ::v-deep .about-bio,
  ::v-deep .about-fact {
    text-align: left;

    &__container__left {
      flex-basis: 100%;
    }

    &__container__right {
      display: none;
    }
  }
}

@media screen and (max-width: 37.5em) {
  ::v-deep .about-skills__container {
    max-width: 25em;
  }
}
</style>
