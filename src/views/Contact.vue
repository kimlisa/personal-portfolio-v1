<template>
  <div class="contact" v-show="showContent">
    <Cover
      title="contact"
      subtitle="get in touch"
    />
    <ContactSection />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Cover from '@/components/SubPageCover.vue';
import ContactSection from '@/components/ContactSection.vue';

@Component({
  components: {
    Cover,
    ContactSection,
  },
})
export default class Contact extends Vue {
  @Prop(Boolean) readonly showContent!: boolean
}
</script>

<style lang="scss" scoped>
::v-deep .contact-section {
  padding-top: 0;
}

@media screen and (max-width: 50em) {
  ::v-deep .contact-section {
    .contact-section__container {
      flex-wrap: wrap;

      &__left {
        flex-basis: 100%;
      }
    }

    .contact-form {
      width: 100%;
      padding: 2em;
      margin-top: 3em;
      border: 1px dashed rgba(15, 157, 123, 0.35);
      border-radius: 0.5em;
    }
  }
}
</style>
