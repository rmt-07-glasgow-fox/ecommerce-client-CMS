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
      router.push('/login')
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
    }
  },
  getters: {
  }
})
