import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: '',
    banners: '',
    category: ''
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    addProduct (state, payload) {
      state.products.push(payload)
    },
    insertBanners (state, payload) {
      state.banners = payload
    },
    addBanner (state, payload) {
      state.banners.push(payload)
    },
    filterCategory (state, payload) {
      state.category = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios
        .post('/login', payload)
    },
    fetchProducts (context, payload) {
      axios
        .get('/products', {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios
        .post('/products', payload, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          Swal.fire(
            'Add product Success!',
            'Click OK to continue',
            'success'
          )
          router.push('/dashboard')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    getOneProduct (context, payload) {
      return axios
        .get(`/products/${payload}`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    editProduct (context, payload) {
      const { name, imageUrl, category, price, stock } = payload
      axios
        .put(`/products/${payload.id}/edit`, { name, imageUrl, category, price, stock }, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          Swal.fire(
            'Edit product Success!',
            'Click OK to continue',
            'success'
          )
          router.push('/dashboard')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    deleteProduct (context, payload) {
      axios
        .delete(`/products/${payload}/delete`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(() => {
          Swal.fire(
            'Delete product Success!',
            'Click OK to continue',
            'success'
          )
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    fetchBanners (context, payload) {
      axios
        .get('/banners', {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          context.commit('insertBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      axios
        .post('/banners', payload, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          Swal.fire(
            'Add banner Success!',
            'Click OK to continue',
            'success'
          )
          router.push('/dashboard/banners')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    getOneBanner (context, payload) {
      return axios
        .get(`/banners/${payload}`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    editBanner (context, payload) {
      const { title, status, imageUrl } = payload
      axios
        .put(`/banners/${payload.id}/edit`, { title, status, imageUrl }, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          Swal.fire(
            'Edit banner Success!',
            'Click OK to continue',
            'success'
          )
          router.push('/dashboard/banners')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    deleteBanner (context, payload) {
      axios
        .delete(`/banners/${payload}/delete`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(() => {
          Swal.fire(
            'Delete banner Success!',
            'Click OK to continue',
            'success'
          )
          context.dispatch('fetchBanners')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    }
  },
  getters: {
    filterCategory: state => {
      if (state.category === 'all' || state.category === '') {
        return state.products
      } else {
        return state.products.filter((value) => {
          return value.category === state.category
        })
      }
    }
  }
})
