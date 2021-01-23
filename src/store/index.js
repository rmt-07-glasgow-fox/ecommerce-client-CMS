import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
  },
  actions: {
    toDashboard (context, payload) {
      router.push('/')
    },
    logout (context, payload) {
      localStorage.clear()
      router.push('/login')
    }
  },
  modules: {
  }
})
