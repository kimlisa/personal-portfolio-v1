<template functional>
  <div class="project-card">
    <slot name="links"></slot>
    <h5>
      <slot name="header"></slot>
    </h5>
    <p>
      <slot name="description"></slot>
    </p>
    <ul>
      <slot name="tools"></slot>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  font-size: 0.94em;
  text-align: left;
  border-radius: 4px;

  p {
    flex-grow: 1;
    margin-bottom: 1.8em;
    line-height: 1.5em;
  }

  h5 {
    margin: 0.6em 0 0 0;
    font-size: 1.46em;
  }

  ul {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 0.8em;
    line-height: 1.7em;

    @include font-tertiary;

    ::v-deep li {
      margin: 0 1.4em 0 0;

      &:last-child {
        margin-right: 0;
      }
    }

    ::v-deep li::before {
      margin: 0;
      content: '';
    }
  }
}
</style>
