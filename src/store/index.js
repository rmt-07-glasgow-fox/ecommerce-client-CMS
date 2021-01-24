import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const SERVER = process.env.VUE_APP_SERVER || 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {
      name: '',
      description: '',
      category: '',
      image_url: '',
      price: 0,
      stock: 0
    },
    products: []
  },
  mutations: {
    clearProduct (state) {
      state.product = {
        name: '',
        description: '',
        category: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    },
    insertProducts (state, products) {
      state.products = products
    },
    showProductDetails (state, product) {
      state.product = product
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: `${SERVER}/products`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(console.log)
    },
    getProductDetails (context, productId) {
      return axios({
        method: 'GET',
        url: `${SERVER}/products/${productId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addProduct (context) {
      return axios({
        method: 'POST',
        url: `${SERVER}/products`,
        data: context.state.product,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editProduct (context, productId) {
      return axios({
        method: 'PUT',
        url: `${SERVER}/products/${productId}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: context.state.product
      })
    },
    deleteProduct (context, productId) {
      axios({
        method: 'DELETE',
        url: `${SERVER}/products/${productId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(resp => {
          context.dispatch('fetchProducts')
        })
        .catch(console.log)
    },
    login (context, data) {
      return axios({
        method: 'POST',
        url: `${SERVER}/login`,
        data
      })
    }
  },
  modules: {
  }
})
