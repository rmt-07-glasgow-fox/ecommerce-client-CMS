import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productById: '',
    categories: [],
    categoryById: ''
  },
  mutations: {
    fetchAllProduct (state, payload) {
      state.products = payload
    },
    fetchProductById (state, payload) {
      state.productById = payload
    },
    fetchAllCategory (state, payload) {
      state.categories = payload
    },
    fetchCategoryById (state, payload) {
      state.categoryById = payload
    }
  },
  actions: {
    fetchAllProduct (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchAllProduct', data.products)
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    fetchProductById (context, id) {
      axios({
        method: 'get',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchProductById', data.product)
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products')
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    editProduct (context, payload) {
      const { id, name, price, stock, imageurl, CategoryId } = payload

      axios({
        method: 'put',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          price,
          stock,
          image_url: imageurl,
          CategoryId
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products').catch(() => {})
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    deleteProduct (context, id) {
      axios({
        method: 'delete',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products').catch(() => {})
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    deleteProductInCategory (context, payload) {
      const { idProduct, idCategory } = payload
      axios({
        method: 'delete',
        url: '/products/' + idProduct,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        return axios({
          method: 'get',
          url: '/categories/' + idCategory,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      }).then(({ data }) => {
        context.commit('fetchCategoryById', data.category)
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    fetchAllCategory (context) {
      axios({
        method: 'get',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchAllCategory', data.categories)
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    fetchCategoryById (context, id) {
      axios({
        method: 'get',
        url: '/categories/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchCategoryById', data.category)
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    addCategory (context, payload) {
      axios({
        method: 'post',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      }).then(({ data }) => {
        context.dispatch('fetchAllCategory')
        router.push('/categories').catch(() => {})
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    editCategory (context, payload) {
      const { id, name, image } = payload

      axios({
        method: 'put',
        url: '/categories/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          image
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllCategory')
        router.push('/categories').catch(() => {})
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    deleteCategory (context, payload) {
      axios({
        method: 'delete',
        url: '/categories/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllCategory')
        router.push('/categories').catch(() => {})
      }).catch(err => {
        console.log(err.response.data.message)
      })
    }
  },
  modules: {
  }
})
