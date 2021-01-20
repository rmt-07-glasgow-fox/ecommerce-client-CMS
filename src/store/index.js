import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    username: ''
  },
  mutations: {
    insertProduct (state, payload) {
      state.product = payload
    },
    insertProducts (state, payload) {
      state.products = payload
    },
    getUserName (state, payload) {
      state.username = payload.email.split('@')[0]
    }
  },
  actions: {
    fetchProductDetail (context, payload) {
      axios
        .get('/products/' + payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(console.log)
    },
    fetchProducts (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(console.log)
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('getUserName', payload)
          router.push('/dashboard')
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
