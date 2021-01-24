import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: null,
    user: null,
    banners: null
  },
  mutations: {
    setProduct (state, data) {
      state.products = data
    },
    setBanners (state, data) {
      state.banners = data
    }
    // setUser (state, data) {
    //   state.user = data
    // }
    // setProductId (state, data) {
    //   const products = state.products
    // }
  },
  actions: {
    login (context, payload) {
      console.log('masuk bosssss')
      const email = payload.email
      const password = payload.password
      console.log(email, password)
      axios({
        url: '/login/admin',
        method: 'post',
        data: {
          email: email,
          password: password
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Yeay',
            text: 'Login Successfull'
          })
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
          console.log(router)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.msg}`
          })
        })
    },
    fetchProduct (context) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        url: '/products',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.imageUrl,
          stock: payload.stock,
          price: payload.price,
          Category: payload.Category
        }
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `add product ${data.name}`,
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.msg}`
          })
        })
    },
    editProduct (context, payload) {
      axios({
        url: '/products/' + payload.id,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price,
          Category: payload.Category
        }
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Edit product ${data.name}`,
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.msg}`
          })
        })
    },
    fetchBanner (context) {
      axios({
        url: '/banners',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      axios({
        url: '/banners',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        }
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Add Banner ${data.title}`,
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchBanner')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.msg}`
          })
        })
    },
    editBanner (context, payload) {
      axios({
        url: '/banners/' + payload.id,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        }
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Add Banner ${data.title}`,
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchBanner')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.msg}`
          })
        })
    },
    deleteBanner (context, id) {
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
            url: '/banners/' + id,
            method: 'delete',
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(_ => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              console.log('berhasil')
              context.dispatch('fetchBanner')
            })
            .catch(err => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.response.message}`
              })
            })
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
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: '/products/' + id,
            method: 'delete',
            headers: {
              access_token: localStorage.access_token
            }
          })
            .then(_ => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              context.dispatch('fetchProduct')
            })
            .catch(err => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.response.message}`
              })
            })
        }
      })
    }
  },
  modules: {
  }
})
