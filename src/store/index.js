import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productById: []
  },
  mutations: {
    updateStockName (state, name) {
      state.nameUpdateStock = name
    },
    getProducts (state, data) {
      state.products = data
    },
    getProductById (state, data) {
      state.productById = data
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          data.forEach(el => {
            el.price = `Rp ${el.price}`
          })
          context.commit('getProducts', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProductById (context, id) {
      axios({
        url: `/products/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('getProductById', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login (context, payload) {
      // console.log(payload)
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((response) => {
          // console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          Swal.fire({
            icon: 'success',
            title: `Hi ${payload.email} !`,
            text: 'Welcome to Florence-Fox E-Commerce '
          })
          router.push('/dashboard')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    register (context, payload) {
      console.log(payload)
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((response) => {
          console.log(response.data)
          Swal.fire({
            icon: 'success',
            title: 'Your Email Success To Register',
            text: `Please Remember Your Email is : ${payload.email}`
          })
          router.push('/login')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    deleteProduct ({ dispatch }, id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete this Product!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `products/${id}`,
            method: 'DELETE',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
            .then((data) => {
              Swal.fire({
                icon: 'success',
                title: 'Okay..',
                text: 'Your Product has been Deleted'
              })
              dispatch('fetchProducts')
            })
            .catch((err) => {
              console.log(err)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
            })
        }
      })
    },
    async updateStock (context, id) {
      const { value: stock } = await Swal.fire({
        input: 'number',
        inputLabel: 'Update Stock',
        inputPlaceholder: 'Stock Here',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      if (stock) {
        axios({
          url: `/products/${id}`,
          method: 'PATCH',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            stock: stock
          }
        })
          .then(({ data }) => {
            context.dispatch('fetchProducts')
            Swal.fire('Stock Updated')
          })
          .catch((err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message
            })
          })
      }
    },
    editProductById ({ dispatch }, data) {
      console.log(data, 'dari store')
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Edit this Product!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `products/${data.id}`,
            method: 'PUT',
            data: {
              name: data.product.name,
              image_url: data.product.image_url,
              stock: data.product.stock,
              price: data.product.price
            },
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
            .then((data) => {
              Swal.fire({
                icon: 'success',
                title: 'Okay..',
                text: 'Your Product has been Edited'
              })
              dispatch('fetchProducts')
              router.push('/dashboard')
            })
            .catch((err) => {
              console.log(err)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message
              })
            })
        }
      })
    },
    createNewProduct ({ dispatch }, data) {
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: data.name,
          image_url: data.image_url,
          stock: data.stock,
          price: data.price
        }
      })
        .then((response) => {
          console.log(response.data)
          Swal.fire({
            icon: 'success',
            title: 'Add Product Success !',
            text: 'Thank you for create new product'
          })
          dispatch('fetchProducts')
          router.push('/dashboard')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    }
  },
  modules: {
  }
})
