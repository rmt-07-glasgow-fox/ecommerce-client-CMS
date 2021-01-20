import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'

const baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    userInfo: {}
  },
  mutations: {
    fetchProducts (state, payload) {
      state.products = payload
    },
    getUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: `${baseURL}/product`
      })
        .then(({ data }) => {
          context.commit('fetchProducts', data)
        })
        .catch(err => console.log(err))
    },
    deleteProduct (context, id) {
      console.log(id)
      axios({
        method: 'DELETE',
        url: `${baseURL}/product/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          this.dispatch('fetchProducts').then(() => console.log(data.message))
        })
        .catch(err => console.log(err))
    },
    getUserInfo (context) {
      axios({
        method: 'GET',
        url: `${baseURL}/getuser`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('getUserInfo', data)
        })
        .catch(err => console.log(err))
    },
    login (context, payload) {
      // console.log(payload.email, payload.password) //デバッグ用
      axios({
        method: 'POST',
        url: `${baseURL}/login`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'AdminDashboard' })
        })
        .catch(err => console.log(err))
    },
    logout (context) {
      localStorage.removeItem('access_token')
      router.push('/')
    }
  },
  modules: {
  }
})
