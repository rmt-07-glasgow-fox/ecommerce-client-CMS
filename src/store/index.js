import Vue from 'vue'
import Vuex from 'vuex'
import axioss from '../api/axios'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: ''
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      return axioss
        .post('/login', payload)
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
