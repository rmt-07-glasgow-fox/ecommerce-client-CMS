import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    brands: [],
    baseURL: 'http://localhost:3000'
  },
  mutations: {
    insertStateProducts(state, payload) {
      state.products = payload
    },
    insertStateBrands(state, payload) {
      state.brands = payload
    }
  },
  actions: {
    async getAllProducts(context, payload) {
      try {
        let response = await axios.get('/products', { headers: { access_token: localStorage.access_token } })
        console.log('>>> data', response.data)
        context.commit('insertStateProducts', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async login(context, payload) {
      try {
        // console.log('>>> input login', payload)
        let user = await axios.post('/user/login', payload)
        // console.log('>>> user login : ', user.data)
        localStorage.setItem('access_token', user.data.access_token)
      } catch (err) {
        console.log(err.message)
      }
    },
    logout(context, payload) {
      localStorage.clear()
    }
  }
})
