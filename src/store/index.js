import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      })
    }
  }
})
