import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProduct: [],
    productId: '',
    oneProduct: '',
    page: 'login'
  },
  mutations: {
    insertAllProduct (state, payload) {
      state.allProduct = payload
    },
    insertProductId (state, payload) {
      state.productId = payload
    },
    insertOneProduct (state, payload) {
      state.oneProduct = payload
    }
  },
  actions: {
    createProduct (context, payload) {
      const name = payload.name
      const genre = payload.genre
      const imageUrl = payload.imageUrl
      const stock = +payload.stock
      const price = +payload.price
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name, genre, imageUrl, stock, price
        }
      })
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Product Created'
          })
          this.dispatch('getAllProduct')
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          Swal.fire({
            icon: 'error',
            title: 'Please fill all required field',
            text: err.response.data.errors[0]
          })
        })
    },
    getAllProduct (context) {
      axios
        .get('/products', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          context.commit('insertAllProduct', data)
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },
    getOneProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('insertOneProduct', data)
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },
    updateProduct (context, payload) {
      const id = payload.id
      const name = payload.name
      const genre = payload.genre
      const imageUrl = payload.imageUrl
      const stock = +payload.stock
      const price = +payload.price
      axios({
        method: 'PUT',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name, genre, imageUrl, stock, price
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Product Updated Successfully'
          })
          this.dispatch('getAllProduct')
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          Swal.fire({
            icon: 'error',
            title: 'Please fill all required field',
            text: err.response.data.errors[0]
          })
        })
    },
    deleteProduct (context, id) {
      axios
        .delete(`/products/${id}`, { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Product Deleted Successfully'
          })
          this.dispatch('getAllProduct')
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },
    login (context, payload) {
      const email = payload.email
      const password = payload.password
      axios({
        method: 'POST',
        url: '/loginAdmin',
        data: {
          email, password
        }
      })
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Login Success'
          })
          this.dispatch('getAllProduct')
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message === 'Invalid email/password') {
            Swal.fire({
              icon: 'error',
              title: 'Wrong Login Info',
              text: err.response.data.message
            })
          } else if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    }
  }
})
