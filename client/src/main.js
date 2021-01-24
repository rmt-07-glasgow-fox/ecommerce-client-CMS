import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import VuePageTransition from 'vue-page-transition'
import store from './store'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter,
  {
    symbol: 'Rp.',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
