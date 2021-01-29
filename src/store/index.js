import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'
import router from '../router/'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: '',
    username: '',
    errors: '',
    categories: [],
    category: ''
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
    insertCategories (state, payload) {
      const result = []
      payload.forEach(product => {
        result.push(product.category)
      })
      state.categories = [...new Set(result)]
    },
    catchError (state, payload) {
      state.errors = payload
    },
    changeCategory (state, payload) {
      state.category = payload
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
        .catch((err) => {
          console.log(err)
          router.push({ name: 'NotFound' })
        })
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
          context.commit('insertCategories', data)
        })
        .catch((err) => {
          context.commit('catchError', err.response.data.errors)
        })
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
      return axios
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
  getters: {
    productByID: (state) => id => {
      return state.products.find(product => (product.id === id))
    },
    filterByCategory: state => {
      if (state.category === '' || state.category === 'all') {
        return state.products
      } else {
        return state.products.filter((value) => {
          return value.category === state.category
        })
      }
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
