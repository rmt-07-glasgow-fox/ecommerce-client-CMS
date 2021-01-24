import $axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

const state = {
  banners: [],
  page: 1,
  size: 5
}

const mutations = {
  SET_BANNERS (state, payload) {
    state.banners = payload
  },
  SET_PAGE (state, payload) {
    state.page = payload
  }
}

const actions = {
  getBanners ({ commit, state }, payload) {
    let search = typeof payload !== 'undefined' ? payload : ''
    $axios
      .get(`/banners?page=${state.page}&size=${state.size}&q=${search}`)
      .then(response => {
        commit('SET_BANNERS', response.data)
      })
      .catch(err => {
        Swal.fire(
          'Error!',
          `${err.response.data.errors}`,
          'errors'
        )
      })
  },
  addBanners ({ dispatch }, payload) {
    $axios
      .post('/banners', payload)
      .then(response => {
        dispatch('getBanners').then(() => {
          Swal.fire(
            'Success!',
            `Successfully add new data`,
            'success'
          )
          router.push({ name: 'banner.data' })
        })
      })
      .catch(err => {
        Swal.fire(
          'Error!',
          `${err.response.data.errors}`,
          'error'
        )
      })
  },
  editBanners ({ commit }, payload) {
    return $axios.get(`/banners/${payload}`)
  },
  updateBanners ({ dispatch }, payload) {
    $axios
      .put(`/banners/${payload.id}`, payload)
      .then(response => {
        dispatch('getBanners').then(() => {
          Swal.fire(
            'Success!',
            'Successfully updated data',
            'success'
          )
          router.push({ name: 'banner.data' })
        })
      }).catch(err => {
        Swal.fire(
          'Error!',
          `${err.response.data.errors}`,
          'error'
        )
      })
  },
  removeBanners ({ commit, dispatch }, payload) {
    $axios
      .delete(`banners/${payload}`)
      .then(response => {
        dispatch('getBanners')
        commit('SET_PAGE', 1)
        Swal.fire(
          'Deleted!',
          `${response.data.message}`,
          'success'
        )
      }).catch(err => [
        Swal.fire(
          'Error!',
          `${err.response.data.errors}`,
          'error'
        )
      ])
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
