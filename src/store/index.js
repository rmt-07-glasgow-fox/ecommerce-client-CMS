import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: [],
    addData: {
      name: '',
      category: '',
      price: 0,
      stock: 0,
      image_url: ''
    }
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertProduct (state, payload) {
      state.product = payload
    },
    showEditForm (state, payload) {
      state.showEditForm = payload
    },
    addData (state, payload) {
      state.addData = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'get',
        url: '/admin/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('insertProducts', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchOneProduct (context, payload) {
      axios({
        method: 'GET',
        url: `/admin/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          context.commit('insertProduct', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    add (context, payload) {
      axios({
        method: 'POST',
        url: '/admin/products/',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          context.commit('addData', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    update (context, payload) {
      axios({
        method: 'PUT',
        url: `/admin/products/${payload}`,
        data: this.product,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          context.commit('insertProduct', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: `/admin/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
