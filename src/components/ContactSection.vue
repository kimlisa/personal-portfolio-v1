<template>
  <section class="contact-section">
    <h3>send a message</h3>
    <div class="contact-section__container">
      <div class="contact-section__container__left">
        <p class="contact-section__container__left__text p--first">
          Whether you have a question or just want to say hi, I will try my best
          to get back to you.
        </p>
        <div class="contact-section__container__left__resources">
          <p>
            <font-awesome-icon icon="envelope" /> kimlisa@uw.edu
          </p>
          <p>
            <font-awesome-icon icon="location-arrow" /> Greater Seattle Area
          </p>
          <p class="contact--social-icons">
            <a href="./kimlisa_resume2019.pdf" target="_blank">
              <font-awesome-icon icon="file-word"/>
            </a>
            <a href="" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="" target="_blank">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </p>
        </div>
      </div>
      <ContactForm/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactForm from '@/components/ContactForm.vue';

@Component({
  components: {
    ContactForm,
  },
})
export default class ContactSection extends Vue {

}
</script>

<style lang="scss" scoped>
.contact-section {
  @include subpage-section-wrapper;

  &__container {
    @include flex-between;

    align-items: flex-start;

    &__left {
      flex-basis: 23em;
    }
  }

  ::v-deep .contact-form {
    width: 100%;
    max-width: 23em;

    input {
      width: 85%;
    }

    textarea {
      width: 89%;
    }
  }

  .contact-section__container__left__text {
    margin-bottom: 2em;
  }

  .contact-section__container__left__resources p {
    display: flex;
    align-items: center;
    margin: 0 0 0.7em 0;

    svg {
      width: 1em;
      margin-right: 0.7em;
      font-size: 1.6rem;
    }

    &.contact--social-icons {
      margin-top: 3em;

      svg {
        font-size: 2.3rem;
      }
    }
  }
}

</style>
