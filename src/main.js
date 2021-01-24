import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'

Vue.config.productionTip = false

Vue.directive('visible', (el, binding) => {
  el.style.visibility = binding.value === 'null' ? 'hidden' : 'visible'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
