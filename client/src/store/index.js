import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
  },
  actions: {
    handleLogin (context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(res => {
        console.log(res.data)
        localStorage.setItem('access_token', res.data.access_token)
        router.push('/products')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
