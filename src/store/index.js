import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },

  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },

    addProduct (state, payload) {
      state.products.push(payload)
    },

    updateProduct (state, payload) {
      // const index = state.products.findIndex((p) => p.id === payload.id)
      // state.products[index] = payload

      const products = state.products
      products.forEach((product) => {
        if (product.id === payload.id) {
          product = payload
        }
      })
    },

    removeProduct (state, productId) {
      state.products = state.products.filter((p) => p.id !== productId)
    }
  },

  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/home')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    logout () {
      localStorage.clear()
      router.push('/login')
    },

    fetchProducts (context) {
      axios({
        method: 'get',
        url: 'products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    addProduct (context, payload) {
      axios({
        method: 'post',
        url: 'products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.commit('addProduct', data)
          router.push('/home')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    fetchEditProduct (context, payload) {
      axios({
        method: 'get',
        url: '/products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          payload.setProduct(data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    updateProduct (context, payload) {
      axios({
        method: 'put',
        url: 'products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.commit('updateProduct', data)
          router.push('/home')
        })
        .catch((error) => {
          console.log(error, 'UPDATE ERROR')
        })
    },

    onDelete (context, payload) {
      axios({
        method: 'delete',
        url: 'products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.commit('removeProduct', payload.id)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  modules: {
  }
})
