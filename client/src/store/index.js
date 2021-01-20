import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    handleLogin (context, payload) {
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
    },
    getProducts (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        console.log(res.data)
        context.commit('setProducts', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: accessToken
        },
        data: payload
      }).then(res => {
        console.log(res.data)
        context.dispatch('getProducts')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
