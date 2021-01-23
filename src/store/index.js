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
    fetchProduct () {
      axios
        .get('/products', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          this.productlists = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
