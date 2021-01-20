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
        context.commit('insertStateProducts', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async login(context, payload) {
      try {
        let user = await axios.post('/user/login', payload)
        localStorage.setItem('access_token', user.data.access_token)
      } catch (err) {
        console.log(err.message)
      }
    },
    logout(context, payload) {
      console.log('logout')
      // localStorage.clear()
    },
    async getAllBrands(context, payload) {
      try {
        let response = await axios.get('/brands', { headers: { access_token: localStorage.access_token } })
        context.commit('insertStateBrands', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteProduct(context, idProduct) {
      try {
        // console.log('>>> axios : ', idProduct)
        await axios.delete(`/products/${idProduct}`, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getAllProducts')
        this.dispatch('getAllBrands')
      } catch (err) {
        console.log(err)
      }
    },
    async addProduct(context, payload) {
      try {
        await axios.post('/products', payload, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getAllProducts')
        this.dispatch('getAllBrands')
      } catch (err) {
        console.log(err)
      }
    }
  }
})
