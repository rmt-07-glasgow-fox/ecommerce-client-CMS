import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accesstoken: '',
    products: []
  },
  mutations: {
    findAll (stage, payload) {
      stage.products = payload
    },
    login (stage, payload) {
      stage.accesstoken = payload
    },
    logout (stage) {
      stage.accesstoken = ''
    }
  },
  actions: {
    findAll (context) {
      axios.post('/product')
        .then(data => {
          console.log(data.data)
          context.commit('findAll', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginUser (context, payload) {
      axios.post('/login', payload)
        .then(data => {
          context.commit('login', data.data.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout (context) {
      context.commit('logout')
    }
  }
})
