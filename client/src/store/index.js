import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productToEdit: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProductToEdit (state, payload) {
      state.productToEdit = payload
    }
  },
  actions: {
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        router.push('/products')
      }).catch(err => {
        console.log(err)
      })
    },
    getProducts (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        context.commit('setProducts', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: accessToken
        },
        data: payload
      }).then(res => {
        context.dispatch('getProducts')
      }).catch(err => {
        console.log(err)
      })
    },
    getProductId (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        context.commit('setProductToEdit', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    editProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          iamge_url: payload.iamge_url,
          price: payload.price,
          stock: payload.stock,
          description: payload.description
        }
      }).then(res => {
        context.dispatch('getProducts')
      }).catch(err => {
        console.log(err)
      })
    },
    deleteProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        context.dispatch('getProducts')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
