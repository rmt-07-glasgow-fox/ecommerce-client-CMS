import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    successLogin (state, payload) {
      state.page = payload.page
      localStorage.setItem('access_token', payload.access_token)
    },
    successLogout (state) {
      state.page = ''
      localStorage.clear()
    },
    successReadAll (state, payload) {
      state.products = payload
    },
    successReadOne (state, payload) {
      state.product = payload
    }
  },
  actions: {
    loginUser (context, payload) {
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(({ data }) => {
        const obj = {
          access_token: data.access_token,
          page: 'home'
        }
        context.commit('successLogin', obj)
        console.log(obj)
      }).catch(err => console.log(err))
    },
    showList (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('successReadAll', data)
        }).catch(err => console.log(err))
    },
    showOne (context, payload) {
      axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('successReadOne', data)
        })
        .catch(err => console.log(err))
    },
    addProduct (context, payload) {
      const { name, stock, price, imageUrl } = payload
      console.log(payload)
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name,
          stock,
          price,
          image_url: imageUrl
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/products')
        })
        .catch(err => console.log(err))
    },
    editProduct (context, payload) {
      const { id, name, price, stock } = payload
      const imageUrl = payload.image_url
      axios({
        method: 'PUT',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          id,
          name,
          price,
          stock,
          image_url: imageUrl
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push(`/products/${id}`)
        })
        .catch(err => console.log(err))
    },
    deleteProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/products')
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
