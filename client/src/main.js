import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'

Vue.config.productionTip = false

global.$ = jQuery
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
