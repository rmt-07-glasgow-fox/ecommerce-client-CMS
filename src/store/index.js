import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    product: {}
  },
  mutations: {
    passingProducts (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3005/adminLogin',
        data: payload
      })
    },
    fetchProduct ({ commit }) {
      return axios({
        method: 'GET',
        url: 'http://localhost:3005/product',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMTUwMTAxNH0.ot_pZ9bgjU6ByOWk-d6nsN9GyL6xCcOKDjrMNt3EMOw'
        }
      }).then(({ data }) => {
        // this.product = data
        commit('passingProducts', data)
      }).catch(err => {
        console.log(err)
      })
    },
    addProduct ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3005/product',
        data: payload,
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMTUwMTAxNH0.ot_pZ9bgjU6ByOWk-d6nsN9GyL6xCcOKDjrMNt3EMOw'
        }
      })
    },
    deleteProduct ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `http://localhost:3005/product/${payload}`,
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMTUwMTAxNH0.ot_pZ9bgjU6ByOWk-d6nsN9GyL6xCcOKDjrMNt3EMOw'
        }
      })
    }
  }
})
