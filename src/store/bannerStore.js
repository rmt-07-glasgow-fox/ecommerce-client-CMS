import Vue from 'vue'
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
          Vue.swal({
            title: 'Success',
            text: 'Your banner has been added!',
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          })
        })
        .catch(err => {
          console.log(err.response)
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
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
          if (err.response.status === 404) {
            router.push('/datanotfound')
          }
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
          Vue.swal({
            title: 'Success',
            text: res.data.message,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          })
        })
        .catch(err => {
          console.log(err.response)
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    },
    deleteBannerById (context, payload) {
      Vue.swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return axios({
              method: 'DELETE',
              url: 'banners/' + payload,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
          }
        })
        .then(res => {
          this.dispatch('fetchBanners')
          Vue.swal(
            'Deleted!',
            res.data.message,
            'success'
          )
        })
        .catch(err => {
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    }
  }
}

export default bannerStore
