import Vue from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

import PrimeVue from 'primevue/config';
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios'
import VueAxios from 'vue-axios'


import '@/assets/css/tailwind.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

Vue.use(PrimeVue);
Vue.use(Vuelidate)
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

let back = window.location.host == 'localhost:8080' ? 'http://localhost:8000/api/' : 'https://api-libra.herokuapp.com/api/';
axios.defaults.baseURL= back;


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

