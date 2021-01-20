import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLogin: false
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setLoginStatus (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    auth (context) {
      console.log('auth running')
      if (localStorage.access_token) {
        context.commit('setLoginStatus', true)
      } else {
        console.log('setLoginStatus false')
        context.commit('setLoginStatus', false)
        router.push('/login')
      }
    },
    logout (context) {
      localStorage.clear()
      context.commit('setLoginStatus', false)
      router.push('/login')
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          console.log('Fetch products success!')
          context.commit('setProducts', response.data)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  },
  modules: {
  }
})
