import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import bannerStore from './bannerStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProductById (state, payload) {
      state.product = payload
    }
  },
  actions: {
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('email', res.data.email)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleLogout (context, payload) {
      if (payload) {
        localStorage.clear()
        router.push('/')
      }
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setProducts', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleAddProduct (context, payload) {
      axios({
        method: 'POST',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchProducts')
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteDataById (context, payload) {
      axios({
        method: 'DELETE',
        url: 'products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getDataById (context, payload) {
      axios({
        method: 'GET',
        url: 'products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setProductById', res.data)
          router.push('/editproduct/' + payload)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleUpdateProductById (context, payload) {
      axios({
        method: 'PUT',
        url: 'products/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(res => {
          console.log(res)
          console.log('update', payload)
          this.dispatch('fetchProducts')
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
    banner: bannerStore
  }
})
