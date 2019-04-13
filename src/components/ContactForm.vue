<template>
  <div class="contact-form">
    <div class="contact-form__loader" v-show="loading">
      <Loader/>
      <p>{{ loaderMsg }}</p>
    </div>
    <div class="contact-form__loader" v-show="!loading && !showEmailForm">
      <font-awesome-icon icon="thumbs-up" v-show="!errorSendingEmail"/>
      <font-awesome-icon icon="exclamation-triangle" class="error" v-show="errorSendingEmail"/>
      <p>{{ loaderMsg }}</p>
    </div>
    <form
      class="contact-form__form gform"
      ref="contactForm"
      v-show="showEmailForm"
    >
      <label class="sr-only">Keep this field blank</label>
      <input id="honeypot" type="text" name="honeypot" value="" ref="honeypot">
      <div
        class="contact-form__input"
        :class="errorName ? 'border--red' : 'border--default'"
      >
        <font-awesome-icon icon="user" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref="name"
          @focus="errorName = false"
        >
        <div v-show="errorName">
          <font-awesome-icon icon="exclamation-triangle" class="error input--error"/>
          <span class="form--error error">name required</span>
        </div>
      </div>
      <div
        class="contact-form__input"
        :class="errorEmail ? 'border--red' : 'border--default'"
      >
        <font-awesome-icon icon="envelope" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref="email"
          @focus="errorEmail = false"
        >
        <div v-show="errorEmail">
          <font-awesome-icon icon="exclamation-triangle" class="error input--error"/>
          <span class="form--error error">valid email required</span>
        </div>
      </div>
      <div
        class="contact-form__input contact-form__input--text"
        :class="errorMsg ? 'border--red' : 'border--default'"
      >
        <font-awesome-icon icon="comment" />
        <textarea
          :class="expandMsgBox ? 'msg-box-expand' : ''"
          name="message"
          placeholder="Message"
          ref="message"
          @focus="expandMsgBox = true; errorMsg = false"
          @blur="expandMsgBox = false"
        ></textarea>
        <div v-show="errorMsg">
          <font-awesome-icon icon="exclamation-triangle" class="error input--error"/>
          <span class="form--error">message required</span>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-contact-form"
        @click="sendEmail"
        :disabled="errorName || errorEmail || errorMsg"
      >Send Message</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Loader from './Loader.vue';

@Component({
  components: {
    Loader,
  },
})
export default class ContactForm extends Vue {
  expandMsgBox: boolean = false;

  loading: boolean = false;

  loaderMsg: string = '';

  showEmailForm: boolean = true;

  errorName: boolean = false;

  errorEmail: boolean = false;

  errorMsg: boolean = false;

  errorSendingEmail: boolean = false;

  emailRegex: RegExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  $refs!: {
    name: HTMLFormElement,
    email: HTMLFormElement,
    message: HTMLFormElement,
    contactForm: HTMLFormElement,
    honeyPot: HTMLFormElement,
  };

  @Watch('$route')
  onRouteChange() {
    this.resetEmailForm();
  }

  validateInputs(inputs: any): boolean {
    if (inputs.name.value.length === 0) {
      this.errorName = true;
    }

    if (inputs.email.value.length === 0 || !this.emailRegex.test(inputs.email.value)) {
      this.errorEmail = true;
    }

    if (inputs.message.value.length === 0) {
      this.errorMsg = true;
    }

    return !this.errorName && !this.errorEmail && !this.errorMsg;
  }

  resetEmailForm() {
    this.$refs.contactForm.reset();
    this.loading = false;
    this.loaderMsg = '';
    this.showEmailForm = true;
    this.errorName = false;
    this.errorEmail = false;
    this.errorMsg = false;
    this.errorSendingEmail = false;
  }

  sendEmail() {
    this.showEmailForm = false;
    this.loaderMsg = 'sending, please wait';
    this.loading = true;

    const inputs: any = this.$refs;

    if (inputs.honeypot.value.length > 0) return; // detect bots, reject send

    if (!this.validateInputs(inputs)) {
      this.loading = false;
      this.loaderMsg = '';
      this.showEmailForm = true;
      return;
    }

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

    const xhr = new XMLHttpRequest();

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

.error,
.border--red {
  color: #f00 !important;
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

  .contact-form__input {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1.4em;
    border-bottom: 1px solid;

    input {
      width: 100%;
      padding: 0.5em;
      font-size: 1.1rem;
      color: #9f9f9f;
      background: transparent;
      border: none;
    }
  }

  svg {
    width: 1em;
    margin-right: 0.5em;
  }

  .contact-form__input--text {
    align-items: flex-start;
  }

  .contact-form__input--text svg {
    position: relative;
    margin-top: 0.2em;
  }

  .msg-box-expand {
    height: 7em;
  }

  textarea {
    width: 100%;
    height: 1em;
    padding: 0.5em;
    font-size: 1.12rem;
    color: #9f9f9f;
    background: transparent;
    border: none;
    transition: 200ms cubic-bezier(0, 0.6, 0.9, 1) !important;
  }

  .input--error {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 0.1em;
    margin-bottom: 0.45em;
    font-size: 0.8em;
  }

  .form--error {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: -1.5em;
    font-size: 0.5em;
    color: red;
    letter-spacing: 0.02em;
  }
}
</style>
