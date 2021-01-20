import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: ''
  },
  mutations: {
  },
  actions: {
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('email', res.data.email)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleLogout (context, payload) {
      if (payload) {
        localStorage.clear()
        router.push('/')
      }
    }
  },
  modules: {
  }
})
