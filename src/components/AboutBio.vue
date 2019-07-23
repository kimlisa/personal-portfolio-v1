<template functional>
  <section class="about-bio" :key="aboutBio">
    <h3>who i am</h3>
    <div class="about-bio__container">
      <div class="about-bio__container__left">
        <p class="p--first">
          My name is Lisa. I have a bachelors degree in Computer Science from
          <a href="https://www.uwb.edu/" target="_blank">University of Washington Bothell</a>.
        </p>
        <p>
          I am a software engineer and my niche is in frontend development. I enjoy developing
          websites and web apps that are intuitive, responsive and efficient. I appreciate clean
          designs and love making designs come to fruition.
        </p>
        <p>
          I strive to be minimalistic and simple. And I apply this to my life, my code,
          and my design. My coding motto is KISS, DRY, modularization, and consistency.
          I am constantly learning to sharpen my skills and learn new technologies.
        </p>
      </div>
      <div class="about-bio__container__right">
        <img src="../assets/me4.jpg">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-bio {
  @include subpage-section-wrapper;

  &__container {
    @include flex-between;

    align-items: flex-start;

    &__left {
      flex-basis: 30em;
    }

    &__right {
      flex-basis: 18em;
      margin-left: $margin-flex-spacing;

      img {
        width: 100%;
      }
    }
  }
}
</style>
