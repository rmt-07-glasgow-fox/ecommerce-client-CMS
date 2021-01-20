import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

library.add(fas)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)
Vue.component('font-awesome-icon', FontAwesomeIcon)

window.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
