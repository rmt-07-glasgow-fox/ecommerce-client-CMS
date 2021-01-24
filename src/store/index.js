import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async login () {
      try {
        await axios.post('/api/users/login')
      } catch (error) {
      }
    }
  },
  modules: {
  }
})
