<template functional>
  <section class="about-skills" :key="aboutSkills">
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
          <li>Protobuf / gRPC</li>
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
          <li>REST API</li>
        </ul>
      </div>
    </div>
    <a class="btn--big a--btn" href="./kimlisa_resume_2019.pdf" target="_blank">
      View My Resume
    </a>
  </section>
</template>

<style lang="scss" scoped>
.about-skills {
  @include subpage-section-wrapper;

  &__container {
    @include flex-between;

    flex-wrap: wrap;
    margin: 0 -1em;

    div {
      margin: 0 1em;
    }

    ul {
      margin-bottom: 3em;

      li {
        margin-bottom: 0.9em;
      }
    }
  }

  a {
    display: inline-block;
    margin-top: 1em;
  }
}
</style>
