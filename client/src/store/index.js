import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fillProduct (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fillProduct', data)
        })
        .catch(err => console.log(err))
    },
    gotoDelete (context, payload) {
      axios({
        method: 'DELETE',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {})
        .catch(err => console.log(err))
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        data: payload.data,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          router.push('/dashboard')
        })
        .catch(err => console.log(err))
    },
    getData (context, payload) {
      return axios({
        method: 'GET',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          if (localStorage.access_token) {
            router.push('/dashboard')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
