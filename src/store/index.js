import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    brands: [],
    banners: [],
    productsDetail: {},
    baseURL: 'https://e-commerce-server-by-rozakus.herokuapp.com'
  },
  mutations: {
    insertStateProducts (state, payload) {
      state.products = payload
    },
    insertStateBrands (state, payload) {
      state.brands = payload
    },
    insertStateProductsDetail (state, payload) {
      state.productsDetail = payload
    },
    insertStateBanners(state, payload) {
      state.banners = payload
    }
  },
  actions: {
    async getAllProducts (context, payload) {
      try {
        const response = await axios.get('/products', { headers: { access_token: localStorage.access_token } })
        context.commit('insertStateProducts', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async login (context, payload) {
      try {
        const user = await axios.post('/user/login', payload)
        localStorage.setItem('access_token', user.data.access_token)
      } catch (err) {
        console.log(err.message)
      }
    },
    logout (context, payload) {
      // console.log('logout')
      localStorage.clear()
    },
    async getAllBrands (context, payload) {
      try {
        const response = await axios.get('/brands', { headers: { access_token: localStorage.access_token } })
        context.commit('insertStateBrands', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteProduct (context, idProduct) {
      try {
        // console.log('>>> axios : ', idProduct)
        await axios.delete(`/products/${idProduct}`, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getAllProducts')
        this.dispatch('getAllBrands')
      } catch (err) {
        console.log(err)
      }
    },
    async addProduct (context, newProduct) {
      try {
        // console.log('>>> newProduct in store', newProduct)
        await axios.post('/products', newProduct, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getAllProducts')
        this.dispatch('getAllBrands')
      } catch (err) {
        console.log(err)
      }
    },
    async getProductById (context, idProduct) {
      try {
        const response = await axios.get(`/products/${idProduct}`, { headers: { access_token: localStorage.access_token } })
        context.commit('insertStateProductsDetail', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async editProduct (context, product) {
      try {
        // console.log('>>> axios product', product)
        const { id, name, image_url, price, stock, BrandId } = product

        const updatedProduct = await axios.put(`/products/${id}`,
          { name, image_url, price, stock, BrandId },
          { headers: { access_token: localStorage.access_token } })

        // console.log('>>> updated : ', updatedProduct.data)
        this.dispatch('getAllProducts')
        this.dispatch('getAllBrands')
      } catch (err) {
        console.log(err)
      }
    },
    async getAllBanners (context, payload) {
      try {
        const response = await axios.get('/banners', { headers: { access_token: localStorage.access_token } })
        context.commit('insertStateBanners', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async addBanner (context, newBanner) {
      try {
        // console.log('>>> newProduct in store', newProduct)
        await axios.post('/banners', newBanner, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getAllBanners')
      } catch (err) {
        console.log(err)
      }
    },
    async deleteBanner (context, idBanner) {
      try {
        await axios.delete(`/banners/${idBanner}`, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getAllBanners')
      } catch (err) {
        console.log(err)
      }
    }

  }
})
