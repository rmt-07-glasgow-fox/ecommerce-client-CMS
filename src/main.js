import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vDialogs from 'v-dialogs'
import NavBar from './components/NavBar'

library.add(faTrashAlt, faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('nav-bar', NavBar)

Vue.use(vDialogs, {
  language: 'en'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
