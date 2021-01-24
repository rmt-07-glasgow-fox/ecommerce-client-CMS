import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productId: '',
    productDetail: ''
  },
  mutations: {
    showAllProducts (state, payload) {
      state.products = payload
    },
    putProductId (state, payload) {
      state.productId = payload
    },
    putProductDetail (state, payload) {
      state.productDetail = payload
    }
  },
  actions: {
    getAllProduct (context) {
      axios
        .get(
          '/products',
          {
            headers: {
              access_token: localStorage.access_token
            }
          }
        )
        .then(({ data }) => {
          context.commit('showAllProducts', data)
        })
        .catch(err => console.log(err))
    },
    createProduct (context, payload) {
      const name = payload.name
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
          name,
          image_url: imageUrl,
          stock,
          price
        }
      })
        .then(data => {
          if (data) {
            Swal.fire({
              icon: 'success',
              title: 'Success Add New Product'
            })
            this.dispatch('getAllProduct')
          }
        })
        .catch(err => {
          console.log(err.response.data)
          if (err.response.data.message === 'You not Unauthorized') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          Swal.fire({
            icon: 'error',
            title: 'Please fill all required field',
            text: err.response.data.errors
          })
        })
    },
    getById (context, id) {
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('putProductDetail', data)
        })
        .catch(err => console.log(err))
    },
    editProduct (context, payload) {
      const id = payload.id
      const name = payload.name
      const imageUrl = payload.imageUrl
      const stock = +payload.stock
      const price = +payload.price
      axios({
        method: 'PUT',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          image_url: imageUrl,
          stock,
          price
        }
      })
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Product has been Updated'
          })
          this.dispatch('getAllProduct')
        })
        .catch(err => {
          console.log(err.response)
          if (err.response.data.message === 'You not Unauthorized') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          Swal.fire({
            icon: 'error',
            title: 'Please fill all required field',
            text: err.response.data.errors
          })
        })
    },
    deleteProduct (context, id) {
      axios
        .delete(
          `/products/${id}`,
          {
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }
        )
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Delete Successfully'
          })
          context.dispatch('getAllProduct', data)
        })
        .catch(err => {
          console.log(err)
          if (err.response.data.message === 'You not Unauthorized') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },
    loginHandle (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Login Success'
          })
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
          if (err.response.data.message === 'Invalid Email / Password') {
            Swal.fire({
              icon: 'error',
              title: 'Wrong Email/Password',
              text: err.response.data.message
            })
          } else if (err.response.data.message === 'You Not a Admin') {
            Swal.fire({
              icon: 'error',
              title: 'You Not a Admin'
            })
          }
        })
    }
  },
  modules: {
  }
})
