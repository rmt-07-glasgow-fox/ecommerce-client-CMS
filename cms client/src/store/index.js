import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materials: [],
    banners: [],
    material: {},
    banner: {},
    category: ''
  },
  mutations: {
    insertUser (state, payload) {
      state.user = payload
    },
    insertMaterials (state, payload) {
      state.materials = payload
    },
    insertMaterial (state, payload) {
      state.material = payload
    },
    insertCategory (state, payload) {
      state.category = payload
    },
    insertBanners (state, payload) {
      state.banners = payload
    },
    insertBanner (state, payload) {
      state.banner = payload
    }
  },
  actions: {
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
          const accessToken = data.access_token

          localStorage.setItem('access_token', accessToken)
          router.push('/material')
        })
    },
    fetchMaterials (context) {
      axios({
        method: 'GET',
        url: '/materials',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          context.commit('insertMaterials', response.data)
        })
        .catch(err => console.log(err))
    },
    fetchBanners (context) {
      axios({
        method: 'GET',
        url: '/banners',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertBanners', data)
        })
        .catch(err => console.log(err))
    },
    addMaterial (context, payload) {
      axios({
        method: 'POST',
        url: '/materials',
        headers: { access_token: localStorage.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          category: payload.category,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push('/material')
        })
        .catch(err => console.log(err))
    },
    addBanner (context, payload) {
      axios({
        method: 'POST',
        url: '/banners',
        headers: { access_token: localStorage.access_token },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        }
      })
        .then(data => {
          router.push('/banner')
        })
        .catch(err => console.log(err))
    },
    populateMaterial (context, payload) {
      return axios({
        method: 'GET',
        url: '/materials/' + payload,
        headers: { access_token: localStorage.access_token }
      })
    },
    populateBanner (context, payload) {
      return axios({
        method: 'GET',
        url: '/banners/' + payload,
        headers: { access_token: localStorage.access_token }
      })
    },
    editMaterial (context, payload) {
      axios({
        method: 'PUT',
        url: '/materials/' + payload,
        headers: { access_token: localStorage.access_token },
        data: {
          name: this.state.material.name,
          image_url: this.state.material.image_url,
          category: this.state.material.category,
          price: this.state.material.price,
          stock: this.state.material.stock
        }
      })
        .then(({ data }) => {
          router.push('/material')
        })
        .catch(err => console.log(err))
    },
    editBanner (context, payload) {
      axios({
        method: 'PUT',
        url: '/banners/' + payload,
        headers: { access_token: localStorage.access_token },
        data: {
          title: this.state.banner.title,
          image_url: this.state.banner.image_url,
          status: this.state.banner.status
        }
      })
        .then(data => {
          router.push('/banner')
        })
        .catch(err => console.log(err))
    },
    deleteMaterial (context, payload) {
      axios({
        method: 'DELETE',
        url: '/materials/' + payload,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchMaterials')
          router.push('/material')
        })
        .catch(err => console.log(err))
    },
    deleteBanner (context, payload) {
      axios({
        method: 'DELETE',
        url: '/banners/' + payload,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchBanners')
          router.push('/banner')
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    filterMaterials: state => {
      if (state.category === 'all' || state.category === '') {
        return state.materials
      } else {
        const filtered = []
        for (let i = 0; i < state.materials.length; i++) {
          const item = state.materials[i]
          if (item.category === state.category) {
            filtered.push(item)
          }
        }
        return filtered
      }
    }
  }
})
