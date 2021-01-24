import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    selectProduct: {},
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMTE1OTI1M30.lxqxq3b_YALrON2IdlubtFZTI8u5MTBUbqllTvIQhnM'
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    getProduct (state, payload) {
      state.selectProduct = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios
        .get('/products', {
          headers: { access_token: this.state.access_token }
        })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct (context, payload) {
      axios({
        method: 'GET',
        url: '/products/' + payload,
        headers: { access_token: this.state.access_token }
      })
        .then(({ data }) => {
          context.commit('getProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: { access_token: this.state.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        headers: { access_token: this.state.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: '/products/' + payload,
        headers: { access_token: this.state.access_token }
      })
        .then(() => {
          // this.$router.push('/products').catch(() => {})
          this.dispatch('fetchProducts')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
