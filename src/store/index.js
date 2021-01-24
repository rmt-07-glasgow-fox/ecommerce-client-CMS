import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginErr: '',
    items: [],
    product: {
      id: 0,
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    },
    banners: [],
    banner: {
      id: 0,
      title: '',
      status: '',
      image_url: ''
    }
  },
  mutations: {
    errHandler (state, payload) {
      state.loginErr = payload
    },
    fetchAllData (state, payload) {
      state.items = payload
    },
    getEdit (state, payload) {
      state.product.id = payload.id
      state.product.name = payload.name
      state.product.image_url = payload.image_url
      state.product.price = payload.price
      state.product.stock = payload.stock
    },
    fetchAllBanner (state, payload) {
      state.banners = payload
    },
    getEditBanner (state, payload) {
      state.banner.id = payload.id
      state.banner.title = payload.title
      state.banner.status = payload.status
      state.banner.image_url = payload.image_url
    }
  },
  actions: {
    logout (context, payload) {
      localStorage.clear()
      context.commit('errHandler', '')
      router.push('/')
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(res => {
          console.log(res)
          localStorage.setItem('access_token', res.data.access_token)
          context.commit('errHandler', '')
          router.push('/products')
        })
        .catch(err => {
          const msg = err.res.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandler', str)
            } else if (msg.length <= 1) {
              context.commit('errHandler', msg[i])
            }
          }
        })
    },
    fetchProducts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products',
          { headers }
        )
        .then(res => {
          console.log(res)
          context.commit('fetchAllData', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createProd (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/products', payload, { headers })
        .then(res => {
          context.commit('errHandler', '')
          router.push('/products')
        })
        .catch(err => {
          const msg = err.res.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandler', str)
            } else if (msg.length <= 1) {
              context.commit('errHandler', msg[i])
            }
          }
        })
    },

    getEdit (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get(`/products/${payload}`, { headers })
        .then(res => {
          context.commit('getEdit', res.data)
          context.commit('errHandler', '')
          router.push(`/products/${res.data.id}`)
        })
        .catch(err => {
          console.log(err)
        })
    },

    editProd (context, payload) {
      const headers = { access_token: localStorage.access_token }
      const obj = context.state.product
      axios
        .put(`/products/${payload}`, obj, { headers })
        .then(res => {
          context.commit('errHandler', '')
          router.push('/products')
        })
        .catch(err => {
          const msgErr = err.res.data.errors
          const temp = []
          for (let i = 0; i < msgErr.length; i++) {
            if (msgErr.length > 1) {
              temp.push(msgErr[i])
              const str = temp.join(', ')
              context.commit('errHandler', str)
            } else if (msgErr.length <= 1) {
              context.commit('errHandler', msgErr[i])
            }
          }
        })
    },

    destroy (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .delete(`/products/${payload}`, { headers })
        .then(response => {
          context.dispatch('fetchAllData')
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/banners', { headers })
        .then(response => {
          context.commit('fetchAllBanner', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    createBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/banners', payload, { headers })
        .then(response => {
          context.commit('errHandler', '')
          router.push('/banners')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandler', str)
            } else if (msg.length <= 1) {
              context.commit('errHandler', msg[i])
            }
          }
        })
    },

    getEditBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get(`/banners/${payload}`, { headers })
        .then(response => {
          context.commit('getEditBanner', response.data)
          context.commit('errHandler', '')
          router.push(`/banners/${response.data.id}`)
        })
        .catch(err => {
          console.log(err)
        })
    },

    editBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      const obj = context.state.banner
      axios
        .put(`/banners/${payload}`, obj, { headers })
        .then(response => {
          context.commit('errHandler', '')
          router.push('/banners')
        })
        .catch(err => {
          const msg = err.response.data.errors

          const temp = []

          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandler', str)
            } else if (msg.length <= 1) {
              context.commit('errHandler', msg[i])
            }
          }
        })
    },

    destroyBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .delete(`/banners/${payload}`, { headers })
        .then(response => {
          context.dispatch('fetchAllBanner')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
