import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {
      id: '',
      name: '',
      image_url: '',
      price: '',
      stock: '',
      CatId: ''
    },
    categories: [],
    category: {
      id: '',
      name: ''
    },
    banners: [],
    banner: {
      id: '',
      title: '',
      status: '',
      image_url: ''
    }
  },
  mutations: {
    fetchProducts (state, payload) {
      state.products = payload
    },
    populateProduct (state, payload) {
      state.product.id = +payload.id
      state.product.name = payload.name
      state.product.image_url = payload.image_url
      state.product.price = +payload.price
      state.product.stock = +payload.stock
      state.product.CatId = +payload.CatId
    },
    fetchCategories (state, payload) {
      state.categories = payload
    },
    populateCategory (state, payload) {
      state.category.id = +payload.id
      state.category.name = payload.name
    },
    fetchBanners (state, payload) {
      state.banners = payload
    },
    populateBanner (state, payload) {
      state.banner.id = +payload.id
      state.banner.title = payload.title
      state.banner.status = payload.status
      state.banner.image_url = payload.image_url
    }
  },
  actions: {
    // === Auth ===
    async login (payload) {
      console.log(payload)
      try {
        const response = await axios.post('/api/users/login/', { email: 'admin@mail.com', password: '123456' })
        localStorage.setItem('access_token', response.access_token)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    logout () {
      localStorage.clear()
    },

    // === Products ===
    async addProduct (payload) {
      try {
        await axios.post('/api/products', payload, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchProducts')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async fetchProducts (context) {
      try {
        const { data } = await axios.get('/products')
        context.commit('fetchProducts', data)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async fetchProduct (context, payload) {
      try {
        const { data } = await axios.get('/api/products/' + payload)
        context.commit('fetchProduct', data)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async updateProduct (payload) {
      try {
        const body = {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CatId: payload.CatId
        }
        await axios.put('/api/products/' + payload.id, body, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchProducts')
      } catch (error) {
        error.response.data.map((error) => {
          throw new Error(error.message)
        })
      }
    },
    async deleteProduct (payload) {
      try {
        await axios.delete('/api/products/' + payload.id, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchProducts')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },

    // === Categories ===
    async addCategory (payload) {
      try {
        await axios.post('/api/categories', payload, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchCategories')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async fetchCategories (context) {
      try {
        const { data } = await axios.get('/api/categories')
        context.commit('fetchCategories', data)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async fetchCategory (context, payload) {
      try {
        const { data } = await axios.get('/api/categories/' + payload)
        context.commit('fetchCategory', data)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async updateCategory (payload) {
      try {
        const body = {
          name: payload.name
        }
        await axios.put('/api/categories/' + payload.id, body, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchCategories')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async deleteCategory (payload) {
      try {
        await axios.delete('/api/categories/' + payload.id, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchCategories')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },

    // === Products ===
    async addBanner (payload) {
      try {
        await axios.post('/api/banners', payload, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchBanners')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async fetchBanners (context) {
      try {
        const { data } = await axios.get('/api/banners')
        context.commit('fetchBanners', data)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async fetchBanner (context, payload) {
      try {
        const { data } = await axios.get('/api/banners/' + payload)
        context.commit('fetchBanner', data)
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async updateBanner (payload) {
      try {
        const body = {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        }
        await axios.put('/api/banners/' + payload.id, body, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchBanners')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    },
    async deleteBanner (payload) {
      try {
        await axios.delete('/api/banners/' + payload.id, { headers: { access_token: localStorage.access_token } })
        this.dispatch('fetchBanners')
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    }
  },
  modules: {
  }
})
