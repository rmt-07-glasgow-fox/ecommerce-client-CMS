import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    one: []
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertOne (state, payload) {
      state.one = payload
    }
  },
  actions: {
    getProducts (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products'
      })
        .then(response => {
          context.commit('insertProducts', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch((err) => console.log(err))
    },
    getOne (context, payload) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('insertOne', response.data)
          // router.push('/products')
        })
        .catch((err) => console.log(err))
    },
    edit (context, payload) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('insertOne', data)
          console.log(this.one)
          // router.push('/products')
        })
        .catch((err) => console.log(err))
    }
  }
})
