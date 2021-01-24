import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'
import store from './store'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  duration: 2000,
  iconPack: 'fontawesome',
  theme: 'bubble'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
