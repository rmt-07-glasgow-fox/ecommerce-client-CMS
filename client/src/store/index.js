import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    errorMessage: []
  },
  mutations: {
    getAllProducts (state, payload) {
      state.products = payload
    },
    getErrorMessage (state, payload) {
      state.errorMessage = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('getAllProducts', data)
        })
        .catch(error => {
          context.commit('getErrorMessage', error.response.data.message)
        })
    },
    getProductById (context, id) {
      return axios({
        method: 'GET',
        url: '/product/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: '/product/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          imageUrl: payload.imageUrl,
          category: payload.category
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          imageUrl: payload.imageUrl,
          category: payload.category
        }
      })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: '/product/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProduct')
        })
        .catch(error => {
          context.commit('getErrorMessage', error.response.data.message)
        })
    }
  },
  modules: {
  }
})
