<template>
  <section class="contact-section">
    <h3>send a message</h3>
    <div class="contact-section__container">
      <div class="contact-section__container__left">
        <p class="contact-section__container__left__text p--first">
          Whether you have a question or want to say hi (or test out my
          <a
            href="https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server"
            target="_blank">contact form
          </a> actually works 😛), I will try my best to get back to you.
        </p>
        <div class="contact-section__container__left__resources">
          <p>
            <font-awesome-icon icon="envelope" /> kimlisa@uw.edu
          </p>
          <p>
            <font-awesome-icon icon="location-arrow" /> Greater Seattle Area
          </p>
          <p class="contact--social-icons">
            <SocialMediaIcons :resumtText="false"/>
          </p>
        </div>
      </div>
      <ContactForm/>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactForm from './ContactForm.vue';
import SocialMediaIcons from './SocialMediaIcons.vue';

@Component({
  components: {
    ContactForm,
    SocialMediaIcons,
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
    width: 50%;
  }

  .contact-section__container__left__text {
    margin-right: $margin-flex-spacing;
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

      ::v-deep .social-media-icons a {
        margin-right: 0.7em;
        font-size: 2.3rem;
      }
    }
  }
}

</style>
