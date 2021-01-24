import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editProduct: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setEditProduct (state, payload) {
      state.editProduct = payload
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          Vue.toasted.success('welcome', {
            action: {
              text: payload.email.split('@')[0],
              position: 'top-right'
            }
          })
          router.push('/')
        })
        .catch(({ response }) => {
          // console.log(error.response.data)
          Vue.toasted.error(response.data.message, { icon: 'skull' })
        })
    },
    fetch (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setProducts', data.products)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  },
  modules: {
  }
})
