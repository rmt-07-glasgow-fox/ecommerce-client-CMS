import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    allDatas (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'https://e-commerce-cms-app.herokuapp.com/login',
        data: payload
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    logout (context) {
      localStorage.clear()
      router.push('/login')
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: 'https://e-commerce-cms-app.herokuapp.com/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('allDatas', response.data)
        })
        .catch(console.log)
    },
    getCurrentData (context, id) {
      return axios
        .get(`https://e-commerce-cms-app.herokuapp.com/products/${id}`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    deleteCurrentData (context, id) {
      axios({
        method: 'DELETE',
        url: 'https://e-commerce-cms-app.herokuapp.com/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: id
      })
        .then(response => {
          context.dispatch('fetchProduct', response.data)
        })
        .catch(console.log)
    },
    editCurrentData (context, payload) {
      axios({
        method: 'PUT',
        url: 'https://e-commerce-cms-app.herokuapp.com/products/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock
        }
      })
        .then(response => {
          router.push('/')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Update Product.',
            showConfirmButton: false,
            timer: 2000
          })
        })
        .catch(console.log)
    },
    addNewData (context, payload) {
      axios({
        method: 'POST',
        url: 'https://e-commerce-cms-app.herokuapp.com/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock
        }
      })
        .then(response => {
          context.dispatch('fetchProduct', response.data)
          router.push('/')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Add Product.',
            showConfirmButton: false,
            timer: 2000
          })
        })
        .catch(console.log)
    }
  }
})
