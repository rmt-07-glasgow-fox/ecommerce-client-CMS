import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'

import VueFormulate from '@braid/vue-formulate'
import './assets/formulate.css'

import 'vue-navigation-bar/dist/vue-navigation-bar.css'
import VueNavigationBar from 'vue-navigation-bar'

Vue.config.productionTip = false

Vue.component('vue-navigation-bar', VueNavigationBar)

Vue.use(VueFormulate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
