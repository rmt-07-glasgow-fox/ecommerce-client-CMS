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
    setProducts (state, payload) {
      state.products = payload
    },

    addProduct (state, payload) {
      state.products.push(payload)
    },

    updateProduct (state, payload) {
      // const index = state.products.findIndex((p) => p.id === payload.id)
      // state.products[index] = payload

      const products = state.products
      products.forEach((product) => {
        if (product.id === payload.id) {
          product = payload
        }
      })
    },

    removeProduct (state, productId) {
      state.products = state.products.filter((p) => p.id !== productId)
    }
  },

  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Login success'
          })
          router.push('/home')
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Login failed'
          })
        })
    },

    logout () {
      localStorage.clear()
      router.push('/login')
      Swal.fire({
        icon: 'success',
        title: 'Logout success'
      })
    },

    fetchProducts (context) {
      axios({
        method: 'get',
        url: 'products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    addProduct (context, payload) {
      axios({
        method: 'post',
        url: 'products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(({ data }) => {
          context.commit('addProduct', data)
          Swal.fire({
            icon: 'success',
            title: 'Added new product'
          })
          router.push('/home')
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            text: 'Failed add new product'
          })
        })
    },

    fetchEditProduct (context, payload) {
      axios({
        method: 'get',
        url: '/products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          payload.setProduct(data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    updateProduct (context, payload) {
      axios({
        method: 'put',
        url: 'products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(({ data }) => {
          context.commit('updateProduct', data)
          Swal.fire({
            icon: 'success',
            text: 'Product updated'
          })
          router.push('/home')
        })
        .catch((error) => {
          console.log(error, 'UPDATE ERROR')
          Swal.fire({
            icon: 'error',
            text: 'Failed updated product'
          })
        })
    },

    onDelete (context, payload) {
      axios({
        method: 'delete',
        url: 'products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          // context.commit('removeProduct', payload.id)
          Swal.fire({
            title: 'Are you sure?',
            text: 'You cant be ablee to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result) {
              Swal.fire({
                icon: 'success',
                text: 'Product has been deleted'
              })
              context.commit('removeProduct', payload.id)
            }
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            text: 'Failed delete product'
          })
        })
    }
  },

  modules: {
  }
})
