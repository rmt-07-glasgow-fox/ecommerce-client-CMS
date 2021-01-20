import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    email: '',
    password: ''
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProducts (context, state) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(console.log)
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          console.log(payload)
          localStorage.setItem('access_token', data)
          router.push('/dashboard')
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
