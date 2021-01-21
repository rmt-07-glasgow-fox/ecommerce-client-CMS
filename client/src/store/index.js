import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fillProduct (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fillProduct', data)
        })
        .catch(err => console.log(err))
    },
    gotoDelete (context, payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'DELETE',
            url: '/products/' + payload,
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(({ data }) => {
              context.dispatch('fetchProduct')
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
            .catch(err => {
              let valid = ''
              err.response.data.errors.forEach(el => {
                valid += `${el}
                `
              })
              Swal.fire({
                icon: 'error',
                title: 'FAIL UPDATE',
                text: valid
              })
            })
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        data: payload.data,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          router.push('/dashboard')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL UPDATE',
            text: valid
          })
        })
    },
    getData (context, payload) {
      return axios({
        method: 'GET',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          if (localStorage.access_token) {
            router.push('/dashboard')
          }
          Swal.fire(
            'Hallo! Admin',
            'Have you eat breakfast today?',
            'success'
          )
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL LOGIN',
            text: valid
          })
        })
    }
  }
})
