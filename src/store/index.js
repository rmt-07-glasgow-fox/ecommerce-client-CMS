import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editedProduct: {}
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchReadroduct (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCreateroduct (context, payload) {
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        }
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchDeleteroduct (context, payload) {
      const id = payload.id
      axios({
        url: '/products/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchReadroduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchEditroduct (context, payload) {
      const id = payload.id
      axios({
        url: '/products/' + id,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchReadroduct')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
