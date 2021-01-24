import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: [],
    addData: {
      name: '',
      category: '',
      price: 0,
      stock: 0,
      image_url: ''
    },
    loginData: {}
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertProduct (state, payload) {
      state.product = payload
    },
    addData (state, payload) {
      state.addData = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'get',
        url: '/admin/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('insertProducts', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchOneProduct (context, payload) {
      axios({
        method: 'GET',
        url: `/admin/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('insertProduct', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    add (context, payload) {
      axios({
        method: 'POST',
        url: '/admin/products/',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('addData', response.data)
          this.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    update (context, payload) {
      console.log(payload)
      axios({
        method: 'PUT',
        url: `/admin/products/${payload.id}`,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('insertProduct', response.data)
          this.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: `/admin/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response)
          this.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      }).then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        if (response.data.user.role === 'admin') localStorage.setItem('user_status', 'admin')
        else localStorage.setItem('user_status', 'guest')
        console.log(localStorage)
        this.dispatch('fetchProducts')
        router.push('/admin')
        swal({
          title: 'Welcome to e-commerce CMS',
          text: 'Successfully logged in',
          icon: 'success'
        })
      }).catch(err => {
        swal({
          title: 'Invalid email or password',
          text: 'Please try again',
          icon: 'error'
        })
        console.log(err)
      })
    },
    logout (context, payload) {
      localStorage.clear()
    }
  },
  modules: {
  }
})
