<template>
  <div class="project-card">
    <h5></h5>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactForm from '@/components/ContactForm.vue';

@Component({
  components: {
    ContactForm,
  },
})
export default class ProjectCard extends Vue {

}
</script>

<style lang="scss" scoped>


</style>
