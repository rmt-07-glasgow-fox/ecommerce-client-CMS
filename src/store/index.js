import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProduct: [],
    productId: '',
    oneProduct: '',
    page: 'login'
  },
  mutations: {
    insertAllProduct (state, payload) {
      state.allProduct = payload
    },
    insertProductId (state, payload) {
      state.productId = payload
    },
    insertOneProduct (state, payload) {
      state.oneProduct = payload
    }
  },
  actions: {
    createProduct (context, payload) {
      const name = payload.name
      const genre = payload.genre
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
          name, genre, imageUrl, stock, price
        }
      })
        .then(data => {
          this.dispatch('getAllProduct')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getAllProduct (context) {
      axios
        .get('/products', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          context.commit('insertAllProduct', data)
        })
        .catch(err => console.log(err))
    },
    getOneProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('insertOneProduct', data)
        })
        .catch(err => console.log(err))
    },
    updateProduct (context, payload) {
      const id = payload.id
      const name = payload.name
      const genre = payload.genre
      const imageUrl = payload.imageUrl
      const stock = +payload.stock
      const price = +payload.price
      axios({
        method: 'PUT',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name, genre, imageUrl, stock, price
        }
      })
        .then(({ data }) => {
          this.dispatch('getAllProduct')
        })
        .catch(err => console.log(err.response))
    },
    deleteProduct (context, id) {
      axios
        .delete(`/products/${id}`, { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          this.dispatch('getAllProduct')
        })
        .catch(err => console.log(err))
    },
    login (context, payload) {
      const email = payload.email
      const password = payload.password
      axios({
        method: 'POST',
        url: '/login',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          email, password
        }
      })
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          this.dispatch('getAllProduct')
          router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
})
