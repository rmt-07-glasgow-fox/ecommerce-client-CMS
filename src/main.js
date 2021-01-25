import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/vendor/jquery/jquery.min.js'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/vendor/jquery-easing/jquery.easing.min.js'
// import './assets/js/sb-admin-2.min.js'
import './assets/vendor/datatables/jquery.dataTables.min.js'
import './assets/vendor/datatables/dataTables.bootstrap4.min.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
