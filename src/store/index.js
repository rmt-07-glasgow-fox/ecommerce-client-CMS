import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      const products = payload.map(prd => {
        return {
          id: prd.id,
          name: prd.name,
          price: prd.price,
          stock: prd.stock,
          image: prd.imageUrl
        }
      })
      state.products = products
    }
  },
  actions: {
    login (state, payload) {
      return axios.post('/login', payload)
    },
    async getAllProducts (state) {
      const response = await axios.get('/products')
      state.commit('setProducts', response.data)
    }
  }
})
