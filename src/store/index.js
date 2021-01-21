import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    brands: [],
    productsDetail: {},
    baseURL: 'http://localhost:3000'
  },
  mutations: {
    insertStateProducts(state, payload) {
      state.products = payload
    },
    insertStateBrands(state, payload) {
      state.brands = payload
    },
    insertStateProductsDetail(state, payload) {
      state.productsDetail = payload
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
    async addProduct(context, newProduct) {
      try {
        // console.log('>>> newProduct in store', newProduct)
        await axios.post('/products', newProduct, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getAllProducts')
        this.dispatch('getAllBrands')
      } catch (err) {
        console.log(err)
      }
    },
    async getProductById(context, idProduct) {
      try {
        let response = await axios.get(`/products/${idProduct}`, { headers: { access_token: localStorage.access_token } })
        context.commit('insertStateProductsDetail', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async editProduct(context, product) {
      try {
        // console.log('>>> axios product', product)
        let { id, name, image_url, price, stock, BrandId, } = product

        let updatedProduct = await axios.put(`/products/${id}`,
          { name, image_url, price, stock, BrandId },
          { headers: { access_token: localStorage.access_token } })

        console.log('>>> updated : ', updatedProduct.data)
        this.dispatch('getAllProducts')
        this.dispatch('getAllBrands')
      } catch (err) {
        console.log(err)
      }
    }
  }
})
