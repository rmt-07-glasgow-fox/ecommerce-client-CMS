import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {
      id: '',
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  mutations: {
    fetchAllProducts (state, payload) {
      state.products = payload
    },

    populateProduct (state, payload) {
      state.product.id = payload.id
      state.product.name = payload.name
      state.product.image_url = payload.image_url
      state.product.price = payload.price
      state.product.stock = payload.stock
    }
  },
  actions: {
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/products')
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    logout (context, payload) {
      localStorage.clear()
      router.push('/')
    },

    fetchAllProducts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products', { headers })
        .then(response => {
          context.commit('fetchAllProducts', response.data)
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    redirectProducts (context, payload) {
      router.push('/products')
    },

    redirectLogin (context, payload) {
      router.push('/login')
    },

    redirectHome (context, payload) {
      router.push('/')
    },

    addProduct (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/products', payload, { headers })
        .then(response => {
          Swal.fire({
            title: 'Done!',
            text: `${response.data.name} successfully added!`,
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        })
        .catch(err => {
          let errors = err.response.data.errors
          if (!errors) errors = 'Make sure you wrote down all the correct information!'
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    populateProduct (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get(`/products/${payload}`, { headers })
        .then(response => {
          context.commit('populateProduct', response.data)
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    updateProduct (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .put(`/products/${payload}`, this.state.product, { headers })
        .then(response => {
          Swal.fire({
            title: 'Done!',
            text: `${response.data.name} successfully edited!`,
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        })
        .catch(err => {
          let errors = err.response.data.message
          if (!errors) errors = 'Make sure you wrote down all the correct information!'
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    deleteProduct (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .delete(`/products/${payload}`, { headers })
        .then(response => {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your product has been deleted',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          context.dispatch('fetchAllProducts')
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    }
  },
  getters: {
  }
})
