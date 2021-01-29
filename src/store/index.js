import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editProduct: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setEditProduct (state, payload) {
      state.editProduct = payload
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          Vue.toasted.success('welcome', {
            action: {
              text: payload.email.split('@')[0],
              position: 'top-right'
            }
          })
          router.push('/')
        })
        .catch(({ response }) => {
          // console.log(error.response.data)
          Vue.toasted.error(response.data.message, { icon: 'skull' })
        })
    },
    fetchProduct (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setProducts', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    create (context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          // console.log(response.data)
          Vue.toasted.success('added!', { icon: 'thumbs-up' })
          router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data.messages)
          // const errors = response.data.messages
          // errors.forEach(e => {
          //   Vue.toasted.error(e, { icon: 'skull' })
          // })
        })
    },
    findByPk (context, payload) {
      const id = payload
      console.log(id, '<<< edit')
      axios({
        method: 'get',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setEditProduct', data.product)
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'put',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          // console.log(response)
          context.commit('setEditProduct', {})
          Vue.toasted.success('Updated!')
          router.push('/')
        })
        .catch(({ response }) => {
          // console.log(error)
          const errors = response.data.messages
          errors.forEach(e => {
            Vue.toasted.error(e, { icon: 'skull' })
          })
        })
    },
    delete (context, payload) {
      console.log(payload)
      axios({
        method: 'delete',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetchProduct')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
