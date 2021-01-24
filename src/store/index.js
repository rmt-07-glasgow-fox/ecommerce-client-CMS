import Vue from 'vue'
import Vuex from 'vuex'
import eCommerceAPI from '../api/e-commerceAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    addProduct: {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    },
    editProduct: {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    },
    errorMessages: [],
    logoPic: require('../assets/e_logo.png')
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertOneProduct (state, payload) {
      state.product = payload
    },
    addProductMt (state, payload) {
      state.addProduct = payload
    },
    editProductMt (state, payload) {
      state.editProduct = payload
    },
    setErrorMessage (state, payload) {
      state.errorMessages = payload
    },
    resetErrorMessage (state, payload) {
      state.errorMessages = []
    }
  },
  actions: {
    fetchProducts (context, payload) {
      eCommerceAPI.get('/products', {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => console.log(err, 'err store fetchProducts'))
    },
    fetchOneProduct (context, payload) {
      eCommerceAPI.get(`/products/${payload}`, {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertOneProduct', data)
        })
        .catch(err => console.log(err, 'err insertOneProduct'))
    },

    addProduct (context, payload) {
      return new Promise((resolve, reject) => {
        const obj = context.state.addProduct
        eCommerceAPI.post('/products', obj, {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            console.log(data, 'data added')
            context.commit('resetErrorMessage')
            resolve(true)
          })
          .catch(err => {
            console.log(err.response.data.errors, 'err addProduct')
            context.commit('setErrorMessage', err.response.data.errors)
            reject(err)
          })
      })
    },
    editProduct (context, payload) {
      return new Promise((resolve, reject) => {
        const obj = context.state.editProduct
        eCommerceAPI.put(`/products/${payload}`, obj, {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            console.log(data, 'data added')
            context.commit('resetErrorMessage')
            resolve(true)
          })
          .catch(err => {
            console.log(err, 'err addProduct')
            context.commit('setErrorMessage', err.response.data.errors)
            reject(err)
          })
      })
    },
    deleteProduct (context, payload) {
      eCommerceAPI.delete(`/products/${payload}`, {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data, 'data deleted')
        })
        .catch(err => console.log(err, 'err deleteProduct'))
    }
  },
  modules: {
  }
})
