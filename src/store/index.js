import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    email: '',
    password: '',
    products: [],
    currentPage: ''
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    changePage (state, route) {
      state.currentPage = route
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      }).then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then((data) => {
          localStorage.setItem('access_token', data.data.access_token)
        }).catch(err => {
          console.log(err)
        })
    },
    getProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          context.commit('insertProducts', data.data)
          router.push('dashboard')
        }).catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(data => {
        context.dispatch('getProducts')
      }).catch(err => {
        console.log(err)
      })
    },
    updateProduct (context, data) {
      axios({
        method: 'PUT',
        url: `/products/${data.id}`,
        data: data.payload,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(data => {
        context.dispatch('getProducts')
      }).catch(err => {
        console.log(err)
      })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(data => {
        console.log(data)
        context.dispatch('getProducts')
      }).catch(err => {
        console.log(err)
      })
    }
  }

})
