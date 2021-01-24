import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: {},
    sidebar: false,
    pageTitle: 'login'
  },
  mutations: {
    changeProductList (state, payload) {
      state.productList = payload
    },
    changeSidebar (state) {
      state.sidebar = !state.sidebar
    },
    changePageTitle (state, payload) {
      state.pageTitle = payload
    }
  },
  actions: {
    getProducts ({ commit }) {
      return axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data)
          commit('changeProductList', data)
        })
    },
    addProduct ({ commit }, payload) {
      return axios({
        url: '/products',
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    updateProduct ({ commit }, payload) {
      const id = payload.id
      delete payload.updatedAt
      delete payload.createdAt
      delete payload.id
      return axios({
        url: `/products/${id}`,
        method: 'PUT',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteProduct ({ commit }, payload) {
      return axios({
        url: `/products/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    toggleSidebar ({ commit }) {
      commit('changeSidebar')
    },
    login ({ commit }, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: payload
      })
    },
    changePageTitle ({ commit }, payload) {
      commit('changePageTitle', payload)
    },
    sweetSuccess ({ commit }, payload) {
      Swal.fire({
        icon: 'success',
        title: payload,
        text: 'will close in 2 seconds',
        timer: 1500,
        showCancelButton: false,
        showConfirmButton: false
      })
    },
    sweetError ({ commit }, payload) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: payload
      })
    }
  },
  modules: {
  }
})
