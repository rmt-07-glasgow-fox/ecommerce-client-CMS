import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import bannerStore from './bannerStore'
import categoryStore from './categoryStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProductById (state, payload) {
      state.product = payload
    }
  },
  actions: {
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          localStorage.setItem('email', res.data.email)
          Vue.swal({
            title: 'Halo Admin!',
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
          })
          router.push('/dashboard')
        })
        .catch(err => {
          if (err.response.data) {
            Vue.swal({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message
            })
          } else {
            console.log(err.response)
          }
        })
    },
    handleLogout (context, payload) {
      if (payload) {
        localStorage.clear()
        router.push('/')
        Vue.swal({
          title: 'Bye Admin!',
          icon: 'success',
          toast: true,
          position: 'top-end',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        })
      }
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setProducts', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleAddProduct (context, payload) {
      axios({
        method: 'POST',
        url: 'products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchProducts')
          router.push('/dashboard')
          Vue.swal({
            title: 'Success',
            text: 'Your product has been added!',
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          })
        })
        .catch(err => {
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    },
    deleteDataById (context, payload) {
      Vue.swal({
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
              method: 'DELETE',
              url: 'products/' + payload,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
          }
        })
        .then(res => {
          this.dispatch('fetchProducts')
          Vue.swal(
            'Deleted!',
            res.data.message,
            'success'
          )
        })
        .catch(err => {
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    },
    getDataById (context, payload) {
      axios({
        method: 'GET',
        url: 'products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setProductById', res.data)
          router.push('/editproduct/' + payload)
        })
        .catch(err => {
          if (err.response.status === 404) {
            router.push('/datanotfound')
          }
          console.log(err.response)
        })
    },
    handleUpdateProductById (context, payload) {
      axios({
        method: 'PUT',
        url: 'products/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
        .then(res => {
          this.dispatch('fetchProducts')
          router.push('/dashboard')
          Vue.swal({
            title: 'Success',
            text: res.data.message,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          })
        })
        .catch(err => {
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    }
  },
  modules: {
    banner: bannerStore,
    category: categoryStore
  }
})
