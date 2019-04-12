<template>
  <div class="contact-form">
    <div class="contact-form__loader" v-show="loading">
      <Loader/>
      <p>{{ loaderMsg }}</p>
    </div>
    <div class="contact-form__loader" v-show="!loading && !showEmailForm">
      <font-awesome-icon icon="thumbs-up" v-show="!errorSendingEmail"/>
      <font-awesome-icon icon="exclamation-triangle" class="fa--error" v-show="errorSendingEmail"/>
      <p>{{ loaderMsg }}</p>
    </div>
    <form
      class="contact-form__form gform"
      ref="contactForm"
      v-show="showEmailForm"
    >
      <label class="sr-only">Keep this field blank</label>
      <input id="honeypot" type="text" name="honeypot" value="" ref="honeypot">

      <div class="contact-form__user">
        <font-awesome-icon icon="user" />
        <input type="text" name="name" placeholder="Name" ref="name">
      </div>
      <div class="contact-form__envelope">
        <font-awesome-icon icon="envelope" />
        <input type="email" name="email" placeholder="Email" ref="email">
      </div>
      <div class="contact-form__message">
        <font-awesome-icon icon="comment" />
        <textarea
          :class="expandMsgBox ? 'msg-box-expand' : ''"
          name="message"
          placeholder="Message"
          ref="message"
          @focus="expandMsgBox = true"
          @blur="expandMsgBox = false"
        ></textarea>
      </div>
      <button
        type="button"
        class="btn btn-contact-form"
        @click="sendEmail"
      >Send Message</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loader from '@/components/Loader.vue';

@Component({
  components: {
    Loader,
  },
})
export default class NAME extends Vue {
  expandMsgBox: boolean = false;

  loading: boolean = false;

  loaderMsg: string = '';

  showEmailForm: boolean = true;

  errorSendingEmail: boolean = false;

  sendEmail() {
    this.showEmailForm = false;
    this.loaderMsg = 'sending, please wait';
    this.loading = true;

    const inputs: any = this.$refs;

    if (inputs.honeypot.value.length > 0) return; // detect bots, reject send

    const xhr = new XMLHttpRequest();
    const formData: any = {
      name: inputs.name.value,
      email: inputs.email.value,
      message: inputs.message.value,
      formDataNameOrder: '["name", "email", "message"]',
      formGoogleSheetName: 'responses',
      formGoogleSendEmail: '',
    };

    // url encode form data for sending as post data
    const encoded = Object.keys(formData)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(formData[k])}`)
      .join('&');

    xhr.open('POST', process.env.VUE_APP_GOOGLE_EMAIL_SCRIPT);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.timeout = 5000;

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.loading = false;
        this.loaderMsg = 'email sent!';
        inputs.contactForm.reset();
      }
    };

    xhr.ontimeout = () => {
      this.errorSendingEmail = true;
      this.loading = false;
      this.loaderMsg = 'a problem was encountered and your email could not be sent.';
    };

    xhr.send(encoded);
  }
}
</script>

<style lang="scss" scoped>

#honeypot {
  display: none;
}

button {
  margin-top: 2em;
}

.contact-form__loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 15em;
  color: #606060;
  text-align: center;

  svg {
    margin: 0 auto;
    margin-top: 2em;
    font-size: 2.5em;
  }

  .fa--error {
    color: #f00 !important;
  }
}

.btn-contact-form {
  width: 100%;
  padding: 0.7em auto;
  font-size: 1.2rem;
  background-color: transparent;
  border: 1px solid;
  border-radius: 2rem;
  box-shadow: none;
}

.contact-form__form {
  width: 100%;
  font-size: 1.7rem;
  text-align: left;

  div {
    margin-bottom: 1em;
    border-bottom: 1px solid;
  }

  svg {
    width: 1em;
    margin-right: 0.5em;
  }

  input {
    padding: 0.5em;
    font-size: 1.1rem;
    color: #9f9f9f;
    background: transparent;
    border: none;
  }

  .contact-form__message {
    display: flex;
  }

  .msg-box-expand {
    height: 7em;
  }

  textarea {
    height: 1em;
    padding: 0.5em;
    font-size: 1.12rem;
    color: #9f9f9f;
    background: transparent;
    border: none;
    transition: 200ms cubic-bezier(0, 0.6, 0.9, 1) !important;
  }
}
</style>
