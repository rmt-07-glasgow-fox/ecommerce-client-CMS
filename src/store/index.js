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
        url: 'https://ecommerce-mine-7d157.web.app/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
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
        url: 'https://ecommerce-mine-7d157.web.app/products',
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
        url: `https://ecommerce-mine-7d157.web.app/products/${payload}`,
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
      console.log(payload)
      axios({
        method: 'PUT',
        url: `https://ecommerce-mine-7d157.web.app/products/${payload.id}`,
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
          console.log(data.message)
          router.push('/products')
        })
        .catch((err) => console.log(err))
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'https://ecommerce-mine-7d157.web.app/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/products')
        })
        .catch((err) => console.log(err))
    },
    delete (context, payload) {
      axios({
        method: 'GET',
        url: `https://ecommerce-mine-7d157.web.app/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // router.push('/products')
          console.log(response.data)
          return axios({
            method: 'DELETE',
            url: 'https://ecommerce-mine-7d157.web.app/products/' + response.data.id,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        })
        .then(response => {
          console.log(response.data)
          context.dispatch('getProducts')
        })
        .catch((err) => console.log(err))
    }
  }
})
