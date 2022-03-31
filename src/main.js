import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starEmpty } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(starSolid);
library.add(starEmpty);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
