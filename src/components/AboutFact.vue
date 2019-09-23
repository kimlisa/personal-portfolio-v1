<template functional>
  <section class="about-fact" :key="aboutFact">
    <h3>spare time</h3>
    <div class="about-fact__container">
      <div class="about-fact__container__left">
        <p class="p--first">
          In my spare time, I like to contribute to projects with meaningful purpose.
          Currently, I am contributing to <a href="https://github.com/bio-pdv" target="_blank">Bio Population Dynamics Viewer</a>
          (bio-pdv). It is a web application currently in its early development that provides
          biologists a tool to upload and analyze mutational differences between reference
          DNA sequences and samples.
        </p>
        <p>
          When I am not coding, I like to bake, watch Kdrama, paint,
          or play League of Legends with friends.
        </p>
      </div>
      <div class="about-fact__container__right">
        <font-awesome-icon :icon="['fas', 'coffee']" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-fact {
  @include subpage-section-wrapper;

  text-align: right;

  &__container {
    @include flex-between;

    align-items: flex-start;

    &__left {
      flex-basis: 30em;
      order: 1;
      text-align: left;
    }

    &__right {
      flex-basis: 2em;
      align-self: center;
      margin: 0 auto;
      font-size: 11em;
      color: #5e5e5e;
      text-align: left;
    }
  }
}
</style>
