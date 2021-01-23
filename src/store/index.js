import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    }
  },
  actions: {
    login (context, payload) {
      return axios.post('/login', payload)
    },
    async getAllProducts (context) {
      const { data } = await axios.get('/products')
      context.commit('setProducts', data)
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
    }
  }
})
