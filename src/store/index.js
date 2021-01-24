import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'
import store from '@/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: '',
    accesstoken: '',
    products: [],
    product: {}
  },
  mutations: {
    products (state, payload) {
      state.products = payload
    },
    product (state, payload) {
      state.product = payload
    },
    accesstoken (state, payload) {
      state.accesstoken = payload
    },
    logout (state) {
      state.accesstoken = ''
      state.role = ''
    },
    role (state, payload) {
      state.role = payload
    }
  },
  actions: {
    findAll (context) {
      axios.get('/product')
        .then(data => {
          context.commit('products', data.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    findOne (context, payload) {
      axios.get('/product/' + payload.product, { headers: { accesstoken: payload.accesstoken } })
        .then(data => {
          context.commit('product', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginUser (context, payload) {
      axios.post('/login', payload)
        .then(data => {
          context.commit('accesstoken', data.data.payload.accesstoken)
          context.commit('role', data.data.payload.role)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checktoken (context, payload) {
      axios.post('/checktoken', {}, { headers: { accesstoken: payload } })
        .then(data => {
          context.commit('accesstoken', payload)
          context.commit('role', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios.post('/product', payload.product, { headers: { accesstoken: payload.accesstoken } })
        .then(data => {
          store.dispatch('findAll')
        })
        .catch(err => {
          console.log(err)
        })
    },
    update (context, payload) {
      axios.put(`/product/${payload.id}`, payload.product, { headers: { accesstoken: payload.accesstoken } })
        .then(data => {
          store.dispatch('findAll')
        })
        .catch(err => {
          console.log(err)
        })
    },
    delete (context, payload) {
      axios.delete(`/product/${payload.product}`, { headers: { accesstoken: payload.accesstoken } })
        .then(data => {
          store.dispatch('findAll')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    all: state => {
      return state.products
    },
    filtered: (state) => (category) => {
      return state.products.filter(product => product.category === category)
    }
  }
})
