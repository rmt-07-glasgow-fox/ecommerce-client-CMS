import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {},
    products: [],
    access_token: localStorage.access_token
  },
  mutations: {
    setProducts (state, payload) {
      const products = payload.map(prd => {
        return {
          id: prd.id,
          name: prd.name,
          price: prd.price.toLocaleString(),
          stock: prd.stock,
          image: prd.imageUrl
        }
      })
      state.products = products
    },
    setProduct (state, payload) {
      const { id, name, price, stock, imageUrl } = payload
      const product = { id, name, price, stock, imageUrl }
      state.product = product
    }
  },
  actions: {
    login (context, payload) {
      return axios.post('/login', payload)
    },
    async getAllProducts (context) {
      try {
        const { data } = await axios.get('/products')
        context.commit('setProducts', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getProductById (context, payload) {
      try {
        const { data } = await axios.get('/products/' + payload)
        console.log(data)
        context.commit('setProduct', data)
      } catch (error) {
        console.log(error)
      }
    },
    deleteProduct (context, payload) {
      const headers = {
        access_token: localStorage.access_token
      }
      return axios.delete('/products/' + payload, { headers })
    },
    addNewProduct (context, payload) {
      return axios.post('/products', payload, {
        headers: { access_token: localStorage.access_token }
      })
    },
    editProduct (context, payload) {
      return axios.put('/products/' + payload.id, payload, {
        headers: { access_token: localStorage.access_token }
      })
    }
  }
})
