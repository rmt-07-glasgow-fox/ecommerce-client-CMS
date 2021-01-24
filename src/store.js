import Vue from 'vue'
import Vuex from 'vuex'

import auth from './stores/auth'
import product from './stores/product'
import category from './stores/category'
import banner from './stores/banner'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    product,
    category,
    banner
  },
  state: {
    token: localStorage.getItem('token'),
    errors: ''
  },
  getters: {
    isAuth: state => {
      return state.token !== 'null' && state.token !== null
    }
  },
  mutations: {
    SET_TOKEN (state, payload) {
      state.token = payload
    },
    SET_ERRORS (state, payload) {
      state.errors = payload
    },
    CLEAR_ERRORS (state) {
      state.errors = ''
    }
  }
})

export default store
