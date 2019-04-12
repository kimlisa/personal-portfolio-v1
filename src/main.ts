import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSun, faMoon, faFileWord, faUser, faComment, faEnvelope,
  faLocationArrow, faShareSquare, faThumbsUp, faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import SubpageSection from '@/components/SubPageSection.vue';

// cherry pick font awesome
library.add(faSun, faMoon, faFileWord, faUser, faComment, faThumbsUp, faExclamationTriangle,
  faEnvelope, faLocationArrow, faShareSquare, faGithub, faLinkedinIn);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
