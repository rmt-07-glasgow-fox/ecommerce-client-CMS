import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/ecommerce-server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editedProduct: {}
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    },
    ProductById (state, payload) {
      state.editedProduct = payload
    }
  },
  actions: {
    fetchData (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginSubmit (context, payload) {
      return axios
        .post('/login', payload)
    },
    addProduct (context, payload) {
      return axios
        .post('/products', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    deleteProduct (context, payload) {
      return axios
        .delete('/products/' + payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    fetchProductId (context, payload) {
      return axios
        .get('/products/' + payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    editProduct (context, payload) {
      const data = {
        name: payload.name,
        image_url: payload.image_url,
        stock: payload.stock,
        price: payload.price
      }
      return axios
        .put('/products/' + payload.id, data, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    }
  }
})
