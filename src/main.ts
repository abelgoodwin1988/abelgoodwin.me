import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDatabase,
  faFileExcel,
  faAngleDoubleRight,
  faAt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedinIn,
  faTwitter,
  faGithubAlt,
  faTwitch,
  faSlack,
  faAws,
  faVuejs,
  faAngular,
  faJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

library.add(
  faDatabase,
  faFileExcel,
  faAngleDoubleRight,
  faAt,
);

library.add(
  faLinkedinIn,
  faTwitter,
  faGithubAlt,
  faTwitch,
  faSlack,
  faAws,
  faVuejs,
  faAngular,
  faJs,
  faPython,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
