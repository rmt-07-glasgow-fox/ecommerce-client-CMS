import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    }
  },
  actions: {
    fetchProducts (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data)
        })
        .catch(err => console.log(err))
    },
    create (context, payload) {
      return axios
        .post('/products', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    update () {
    },
    delete (context, payload) {
      return axios
        .delete('/products/' + payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    }
  },
  modules: {
  }
})
