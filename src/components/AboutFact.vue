<template functional>
  <section class="about-fact" :key="aboutFact">
    <h3>interesting fact</h3>
    <div class="about-fact__container">
      <div class="about-fact__container__left">
        <p class="p--first">
          I hate waking up early, but I am up between 4 - 5AM anyways. The last thing I want to do
          is go to the gym right after I wake up, but that is how I start my day.
        </p>
        <p>
          I got inspired by
          <a href="https://davidgoggins.com/about/" target="_blank">David Goggins</a>,
          a retired Navy Seal. Through him I got a glimpse of what extreme
          self-discipline and self-integrity looked like.
        </p>
        <p>
          I also learned about
          <a
            href="https://www.thebalancecareers.com/seal-training-hell-week-3356097"
            target="_blank"
          >BUD/S Hell Week</a>.
          I told myself if people can voluntarily put themselves through that, and survive it...
          I can survive waking up early to go to the gym.
        </p>
      </div>
      <div class="about-fact__container__right">
        <img src="../assets/quote.jpeg">
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
      flex-basis: 18em;
      margin-right: $margin-flex-spacing;

      img {
        width: 100%;
      }
    }
  }
}
</style>
