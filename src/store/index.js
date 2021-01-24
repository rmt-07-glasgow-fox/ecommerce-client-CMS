import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../api/axios'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(Vuex)
Vue.use(VueSweetalert2)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    banners: [],
    toggleModal: true
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    async login (context, payload) {
      try {
        const user = await axios({
          method: 'POST',
          url: '/login',
          data: payload
        })
        localStorage.setItem('access_token', user.data.access_token)
        this.dispatch('getProducts')
        this.dispatch('getCategories')
        this.dispatch('getBanners')
        router.push('/products')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async getProducts (context, payload) {
      try {
        const products = await axios({
          method: 'GET',
          url: '/products',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('setProducts', products.data)
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async getCategories (context, payload) {
      try {
        const categories = await axios({
          method: 'GET',
          url: '/categories',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('setCategories', categories.data)
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async getBanners (context, payload) {
      try {
        const banners = await axios({
          method: 'GET',
          url: '/banners',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        context.commit('setBanners', banners.data)
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async addProduct (context, payload) {
      try {
        await axios({
          method: 'POST',
          url: '/products',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: payload
        })
        this.dispatch('getProducts')
        router.push('/products')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async addCategory (context, payload) {
      try {
        await axios({
          method: 'POST',
          url: '/categories',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: payload
        })
        this.dispatch('getCategories')
        router.push('/products')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async addBanner (context, payload) {
      try {
        await axios({
          method: 'POST',
          url: '/banners',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: payload
        })
        this.dispatch('getBanners')
        router.push('/banners')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async deleteProduct (context, payload) {
      try {
        await axios({
          method: 'DELETE',
          url: `/products/${payload}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dispatch('getProducts')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async deleteBanner (context, payload) {
      try {
        await axios({
          method: 'DELETE',
          url: `/banners/${payload}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dispatch('getBanners')
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    async editProduct (context, payload) {
      try {
        await axios({
          method: 'PUT',
          url: `/products/${payload.id}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: payload.data
        })
        this.dispatch('getProducts')
      } catch (err) {
        console.log(err)
        throw err
      }
    }
  },
  modules: {
  }
})
