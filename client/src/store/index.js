import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: [],
    category: [],
    banner: [],
    editProduct: {},
    editBanner: {}
  },
  mutations: {
    setProduct (state, payload) {
      state.product = payload
    },
    setCategory (state, payload) {
      state.category = payload
    },
    setBanner (state, payload) {
      state.banner = payload
    },
    setEditProduct (state, payload) {
      state.editProduct = payload
    },
    setEditBanner (state, payload) {
      state.editBanner = payload
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.commit('setProduct', response.data)
        })
        .catch((err) => {
          throw err
        })
    },
    fetchCategory (context) {
      axios({
        method: 'get',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.commit('setCategory', response.data)
        })
        .catch((err) => {
          throw err
        })
    },
    fetchBanner (context) {
      axios({
        method: 'get',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.commit('setBanner', response.data)
        })
        .catch((err) => {
          throw err
        })
    },
    fetchEditProduct (context, id) {
      axios({
        method: 'get',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.commit('setEditProduct', response.data)
        })
        .catch((err) => {
          throw err
        })
    },
    fetchEditBanner (context, id) {
      axios({
        method: 'get',
        url: `/banners/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.commit('setEditBanner', response.data)
        })
        .catch((err) => {
          throw err
        })
    },
    putProduct ({ commit, state }) {
      return axios({
        method: 'put',
        url: `/products/${state.editProduct.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: state.editProduct.name,
          image_url: state.editProduct.image_url,
          price: state.editProduct.price,
          stock: state.editProduct.stock,
          categoryId: state.editProduct.categoryId
        }
      })
        .then(() => {
          commit('setEditProduct', {})
        })
    },
    putBanner ({ commit, state }) {
      return axios({
        method: 'put',
        url: `/banners/${state.editBanner.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: state.editBanner.title,
          image_url: state.editBanner.image_url,
          status: state.editBanner.status
        }
      })
        .then(() => {
          commit('setEditBanner', {})
        })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteBanner (context, id) {
      return axios({
        method: 'delete',
        url: `/banners/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    postProduct (context, payload) {
      return axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          categoryId: payload.categoryId
        }
      })
    },
    postBanner (context, payload) {
      return axios({
        method: 'post',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        }
      })
    },
    postCategory (context, name) {
      return axios({
        method: 'post',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name
        }
      })
    },
    deleteCategory (context, id) {
      return axios({
        method: 'delete',
        url: `/categories/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  }
})
