import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    findByIdData: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setFindByIdData (state, payload) {
      state.findByIdData = payload
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, userLogin) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: userLogin.email,
          password: userLogin.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        data: {
          name: payload.name,
          image_url: payload.url,
          price: +payload.price,
          stock: +payload.stock
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          router.push('products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProductById ({ commit }, payload) {
      axios({
        method: 'GET',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('setFindByIdData', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateNewProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
