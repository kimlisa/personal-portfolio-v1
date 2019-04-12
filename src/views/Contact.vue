<template>
  <div class="contact">
    <Cover
      title="contact"
      subtitle="get in touch"
    />
    <ContactSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cover from '@/components/SubPageCover.vue';
import ContactSection from '@/components/ContactSection.vue';

@Component({
  components: {
    Cover,
    ContactSection,
  },
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
::v-deep .contact-section {
  padding-top: 0;
}
</style>
