import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    username: '',
    errors: []
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
    },
    catchError (state, payload) {
      state.errors = payload
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
    deleteProduct (context, payload) {
      return axios
        .delete('/products/' + payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
    },
    addProduct (context, payload) {
      return axios
        .post('/products', payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
    },
    editProduct (context, payload) {
      const { name, price, stock, imageUrl } = payload
      const id = payload.id
      axios
        .put('/products/' + id, {
          name,
          price,
          stock,
          imageUrl
        }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          router.push('/dashboard')
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
        .catch((err) => {
          context.commit('catchError', err.response.data.errors)
        })
    }
  },
  modules: {
  }
})
