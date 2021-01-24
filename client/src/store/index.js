import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    addproduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/products',
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
    },
    delete (context, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    edit (context, payload) {
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price
        }
      })
        .then(({ data }) => {
          router.push(`/productdetail/${payload.id}`)
        })
        .catch(err => {
          Swal.fire(err.response.data.errors[0])
        })
    },
    addstock (context, payload) {
      axios({
        method: 'PATCH',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push(`/productdetail/${payload.id}`)
        })
        .catch(err => {
          Swal.fire(err.response.data.errors[0])
        })
    },
    logout (context) {
      localStorage.clear()
      router.push('/login')
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('getProducts', data)
        })
        .catch(err => {
          Swal.fire(err.response.data.message)
          localStorage.clear()
          router.push('/login')
        })
    }
  }
})
