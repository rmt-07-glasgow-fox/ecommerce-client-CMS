import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = 'https://ecommerce-stnrvn.herokuapp.com'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: {},
    productById: {}
  },
  mutations: {
    passingProducts (state, payload) {
      state.products = payload
    },
    editProduct (state, payload) {
      state.productById = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: `${baseUrl}/login`,
        data: payload
      })
    },
    fetchProduct ({ commit }) {
      axios({
        method: 'GET',
        url: `${baseUrl}/product`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        commit('passingProducts', data)
      }).catch(err => {
        console.log(err)
      })
    },
    addProduct ({ commit }, payload) {
      axios({
        method: 'POST',
        url: `${baseUrl}/product`,
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editProduct ({ commit }, payload) {
      axios({
        method: 'GET',
        url: `${baseUrl}/product/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        commit('editProduct', data)
      }).catch(err => {
        console.log(err)
      })
    },
    updateProduct ({ commit }, payload) {
      const id = payload.id

      axios({
        method: 'PUT',
        url: `${baseUrl}/product/${id}`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        console.log(data, 'berhasil update')
      }).catch(() => {
        console.log(payload, 'gagal update')
      })
    },
    deleteProduct ({ commit }, payload) {
      console.log(payload)
      return axios({
        method: 'DELETE',
        url: `${baseUrl}/product/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  }
})
