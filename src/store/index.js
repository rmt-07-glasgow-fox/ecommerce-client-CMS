import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLogin: false,
    notification: '',
    notificationHeaders: '',
    notificationDashboard: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setLoginStatus (state, payload) {
      state.isLogin = payload
    },
    // notification page
    setNotification (state, payload) {
      state.notification = payload
    },
    // notification add product
    setNotificationHeaders (state, payload) {
      state.notificationHeaders = payload
    },
    setNotificationDashboard (state, payload) {
      state.notificationDashboard = payload
    }
  },
  actions: {
    auth (context) {
      if (localStorage.access_token) {
        context.commit('setLoginStatus', true)
      } else {
        context.commit('setLoginStatus', false)
        router.push('/login')
      }
    },
    logout (context) {
      localStorage.clear()
      context.commit('setLoginStatus', false)
      router.push('/login')
    },
    setLoginInfo (context, payload) {
      context.commit('setLoginInfo', payload)
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
