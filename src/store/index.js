import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productId: '',
    productDetail: ''
  },
  mutations: {
    showAllProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    getAllProduct (context) {
      axios
        .get(
          '/products',
          {
            headers: {
              access_token: localStorage.access_token
            }
          }
        )
        .then(({ data }) => {
          context.commit('showAllProducts', data)
        })
        .catch(err => console.log(err))
    },
    createProduct (context, payload) {
      const name = payload.name
      const imageUrl = payload.imageUrl
      const stock = +payload.stock
      const price = +payload.price
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name,
          image_url: imageUrl,
          stock,
          price
        }
      })
        .then(data => {
          this.dispatch('getAllProduct')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    loginHandle (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
