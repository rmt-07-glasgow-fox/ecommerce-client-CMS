import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    }
  },
  actions: {
    loginUser (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
      }).catch(err => {
        console.log(err)
      })
    },
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
    createProduct (context, payload) {
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
          context.dispatch('fetchReadroduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      const id = payload
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
    editProduct (context, payload) {
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
