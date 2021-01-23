import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    banners: [],
    filter: ''
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    },
    insertCategory (state, payload) {
      state.categories = payload
    },
    insertBanner (state, payload) {
      state.banners = payload
    },
    changeFilter (state, payload) {
      state.filter = payload
    }
  },
  actions: {
    getProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          localStorage.username = data.email
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    logout () {
      localStorage.clear()
      router.push('/login')
    },
    addProduct (context, payload) {
      const { name, price, stock, imageUrl, CategoryId } = payload
      axios({
        method: 'POST',
        url: '/products',
        data: {
          name,
          price,
          stock,
          image_url: imageUrl,
          CategoryId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.dispatch('getProduct')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    },
    editProduct (context, payload) {
      const { id, name, price, stock, CategoryId } = payload
      axios({
        method: 'PUT',
        url: '/products/' + id,
        data: {
          name,
          price,
          stock,
          image_url: payload.image_url,
          CategoryId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.dispatch('getProduct')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.dispatch('getProduct')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    },
    getCategory (context) {
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertCategory', data)
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    addCategory (context, name) {
      axios({
        method: 'POST',
        url: '/categories',
        data: {
          name
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.dispatch('getCategory')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    },
    editCategory (context, payload) {
      const { id, name } = payload
      axios({
        method: 'PUT',
        url: '/categories/' + id,
        data: {
          name
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.dispatch('getCategory')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    },
    deleteCategory (context, id) {
      axios({
        method: 'DELETE',
        url: '/categories/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.dispatch('getCategory')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    getBanner (context) {
      axios({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertBanner', data)
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    addBanner (context, payload) {
      const { title, status, imageUrl } = payload
      axios({
        method: 'POST',
        url: '/banners',
        data: {
          title,
          status,
          image_url: imageUrl
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.dispatch('getBanner')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    },
    editBanner (context, payload) {
      const { id, title, status, imageUrl } = payload
      axios({
        method: 'PUT',
        url: '/banners/' + id,
        data: {
          title,
          status,
          image_url: imageUrl
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.dispatch('getBanner')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message[0],
            icon: 'error'
          })
        })
    },
    deleteBanner (context, id) {
      axios({
        method: 'DELETE',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.dispatch('getBanner')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    }
  },
  getters: {
    filterProducts: state => {
      if (state.filter === '') return state.products
      else {
        return state.products.filter(e => {
          return e.CategoryId === state.filter
        })
      }
    }
  }
})
