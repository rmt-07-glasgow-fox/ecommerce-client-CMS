import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axios from '@/api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    products: [],
    product: {}
  },
  mutations: {
    changeDrawer (state) {
      state.drawer = !state.drawer
    },
    fetchProducts (state, products) {
      state.products = products
    },
    mutateProduct (state, product) {
      state.product = product
    }
  },
  actions: {
    login (context, data) {
      return axios({
        method: 'POST',
        url: '/login',
        data: data
      })
    },
    getAllProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('fetchProducts', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    getOneProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('mutateProduct', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    createProduct (context, data) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: data
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Detail Product', params: { id: data.id } })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload.data
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Detail Product' })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Products' })
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
