<template functional>
  <div class="project-links">
    <a :href="props.gitHub" title="View Project on GitHub" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a :href="props.demo" title="View Deployed Website" target="_blank">
      <font-awesome-icon icon="share-square" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.project-links {
  margin-left: -0.36em;
  font-size: 2.1rem;

  svg {
    margin: 0 0.36em 0.36em 0.36em;
  }
}
</style>
