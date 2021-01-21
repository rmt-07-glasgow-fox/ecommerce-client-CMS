import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLogin: false,
    pathRoute: ''
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    getIsLogin (state) {
      if (localStorage.getItem('access_token')) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    }
  },
  actions: {
    fetchProduct (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('getProducts', data)
        })
        .catch(err => console.log(err))
    },
    tryLogin (context, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('getIsLogin')
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    tryLogout (context) {
      localStorage.clear()
      context.commit('getIsLogin')
      if (router.currentRoute.name === 'AddProduct') router.push('/auth')
    },
    tryAdd (context, payload) {
      axios
        .post('/products', payload)
        .then(({ data }) => {
        })
        .catch(err => { console.log(err.response.data) })
    }
  },
  getters: {
  }
})
