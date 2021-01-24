import axios from '../axios/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: '',
    isLogin: false,
    previousData: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    changeIsLogin (state, payload) {
      state.isLogin = payload
    },
    addPrevData (state, payload) {
      state.previousData = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('changeIsLogin', true)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        url: '/products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: +payload.stock,
          price: +payload.price
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: +payload.stock,
          price: +payload.price
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/loginAdmin',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('changeIsLogin', true)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getOneProduct (context, payload) {
      axios({
        method: 'GET',
        url: `products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('addPrevData', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
