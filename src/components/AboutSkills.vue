<template functional>
  <section class="about-skills">
    <h3>technical skills</h3>
    <div class="about-skills__container">
      <div>
        <h4>frontend</h4>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Vue.js</li>
          <li>HTML / CSS / SCSS</li>
          <li>Bootstrap / jQuery</li>
        </ul>
      </div>
      <div>
        <h4>backend</h4>
        <ul>
          <li>Node.js</li>
          <li>Golang</li>
          <li>gRPC</li>
          <li>PostgresSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div>
        <h4>other</h4>
        <ul>
          <li>Git / GitHub</li>
          <li>Docker</li>
          <li>SPA</li>
          <li>Microservice</li>
          <li>REST Api</li>
        </ul>
      </div>
    </div>
    <button type="button" class="btn btn--big">
      View My Resume
    </button>
  </section>
</template>

<style lang="scss" scoped>
.about-skills {
  @include subpage-section-wrapper;

  &__container {
    @include flex-between;

    ul {
      margin-bottom: 4em;

      li {
        margin-bottom: 0.9em;
      }
    }
  }
}
</style>
