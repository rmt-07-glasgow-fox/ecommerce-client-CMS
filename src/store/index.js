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
      stock: '',
      category: ''
    },
    banners: [],
    banner: {
      id: '',
      title: '',
      status: '',
      image_url: ''
    },
    isProductPage: true,
    showModalEdit: false,
    toggleModalEdit: false
  },
  mutations: {
    fetchAllProducts (state, payload) {
      state.products = payload
    },

    populateProduct (state, payload) {
      state.product.id = payload.id
      state.product.name = payload.name
      state.product.image_url = payload.image_url
      state.product.price = +payload.price
      state.product.stock = +payload.stock
      state.product.category = payload.category
    },

    fetchAllBanners (state, payload) {
      state.banners = payload
    },

    isProductPage (state, payload) {
      state.isProductPage = payload
    },

    populateBanner (state, payload) {
      state.banner.id = payload.id
      state.banner.title = payload.title
      state.banner.image_url = payload.image_url
      state.banner.status = payload.status
    },

    toggleModalEdit (state, payload) {
      state.toggleModalEdit = !state.toggleModalEdit
      state.showModalEdit = !state.showModalEdit
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
          context.commit('isProductPage', true)
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

    redirectBanners (context, payload) {
      router.push('/banners')
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
    },

    // ===================== BANNER

    fetchAllBanners (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/banners', { headers })
        .then(response => {
          context.commit('fetchAllBanners', response.data)
          context.commit('isProductPage', false)
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

    addBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/banners', payload, { headers })
        .then(response => {
          Swal.fire({
            title: 'Done!',
            text: `${response.data.title} successfully added!`,
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

    deleteBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .delete(`/banners/${payload}`, { headers })
        .then(response => {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your banner has been deleted',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          context.dispatch('fetchAllBanners')
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

    showEditBanner (context, payload) {
      context.dispatch('populateBanner', payload)
    },

    populateBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get(`/banners/${payload}`, { headers })
        .then(response => {
          context.commit('populateBanner', response.data)
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

    updateBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .put(`/banners/${payload}`, this.state.banner, { headers })
        .then(response => {
          context.dispatch('fetchAllBanners')
          Swal.fire({
            title: 'Done!',
            text: `${response.data.title} successfully edited!`,
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
    }
  }
})
