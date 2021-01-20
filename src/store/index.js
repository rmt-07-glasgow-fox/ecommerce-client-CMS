import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: '',
    productList: []
  },
  mutations: {
    updateLoginStatus (state, payload) {
      state.isLoggedIn = payload
    },
    updateProductList (state, payload) {
      state.productList = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.access_token = data.access_token
          router.push({ path: '/products' })
        })
        .catch((error) => {
          if (error.response) {
            // Request made and server responded
            // console.log(error.response.data.errors[0])
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data.errors[0],
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              toast: true,
              position: 'top-right'
            })
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    },
    getProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateProductList', data)
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    },
    getSpecificProduct (context, id) {
      return axios({
        url: '/products/' + id,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addProduct (context, payload) {
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.dispatch('getProducts')
          router.push({ path: '/products' })
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data.errors[0],
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              toast: true,
              position: 'top-right'
            })
            // console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    },
    updateProduct (context, payload) {
      // console.log(payload, 'ini yang mau diupdate')
      axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.dispatch('getProducts')
          router.push({ path: '/products' })
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.response.data.errors[0],
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              toast: true,
              position: 'top-right'
            })
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    },
    deleteProduct (context, id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return axios({
              url: '/products/' + id,
              method: 'DELETE',
              headers: {
                access_token: localStorage.access_token
              }
            })
          }
        })
        .then(({ data }) => {
          console.log(data)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.dispatch('getProducts')
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    }
  },
  modules: {
  }
})
