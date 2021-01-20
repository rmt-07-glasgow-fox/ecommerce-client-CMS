import axios from '../api/axios'
import router from '../router'

const bannerStore = {
  state: () => ({
    banners: [],
    banner: ''
  }),
  mutations: {
    setBanners (state, payload) {
      state.banners = payload
    },
    setBannerById (state, payload) {
      state.banner = payload
    }
  },
  actions: {
    fetchBanners (context) {
      axios({
        method: 'GET',
        url: 'banners',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setBanners', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleAddBanner (context, payload) {
      axios({
        method: 'POST',
        url: 'banners',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: String(payload.status)
        }
      })
        .then(res => {
          router.push('/banners')
          this.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getBannerById (context, payload) {
      axios({
        method: 'GET',
        url: 'banners/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setBannerById', res.data)
          router.push('/editbanner/' + payload)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleUpdateBannerById (context, payload) {
      axios({
        method: 'PUT',
        url: 'banners/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: String(payload.status)
        }
      })
        .then(res => {
          console.log(res.data)
          router.push('/banners')
          this.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteBannerById (context, payload) {
      axios({
        method: 'DELETE',
        url: 'banners/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}

export default bannerStore
