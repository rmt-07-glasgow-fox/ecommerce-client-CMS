import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    allDatas (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch(console.log)
    },
    logout (context) {
      localStorage.clear()
      router.push('/login')
    },
    allData (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response)
          context.commit('allDatas', response.data)
        })
        .catch(console.log)
    }
  },
  getters: {

  }
})
