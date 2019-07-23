<template functional>
  <div class="social-media-icons">
    <a
      href="./kimlisa_resume2019.pdf"
      title="Resume"
      target="_blank"
      class="social-media-icons__resume"
      v-if="props.resumeText"
    >resume</a>
    <a
      href="https://github.com/kimlisa"
      title="GitHub"
      target="_blank"
      class="social-media-icons__github"
    >
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a
      href="https://www.linkedin.com/in/kim-lisa/"
      title="LinkedIn"
      target="_blank"
      class="social-media-icons__linkedin"
    >
      <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    </a>
    <a
      href="./kimlisa_resume_2019.pdf"
      title="Resume"
      target="_blank"
      class="social-media-icons__resume"
      v-if="!props.resumeText"
    >
      <font-awesome-icon icon="file-word"/>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.social-media-icons a {
  font-size: 1rem;
}
</style>
