import $axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

const state = {
  categories: [],
  page: 1,
  size: 5
}

const mutations = {
  SET_CATEGORIES (state, payload) {
    state.categories = payload
  },
  SET_PAGE (state, payload) {
    state.page = payload
  }
}

const actions = {
  getCategories ({ commit, state }, payload) {
    let search = typeof payload !== 'undefined' ? payload : ''
    $axios
      .get(`/categories?page=${state.page}&size=${state.size}&q=${search}`)
      .then(response => {
        commit('SET_CATEGORIES', response.data)
      })
      .catch(err => {
        Swal.fire(
          'Success!',
          `${err.response.data.errors}`,
          'success'
        )
      })
  },
  addCategories ({ dispatch }, payload) {
    $axios
      .post('/categories', payload)
      .then(response => {
        dispatch('getCategories').then(() => {
          Swal.fire(
            'Success!',
            `Successfully add new data`,
            'success'
          )
          router.push({ name: 'category.data' })
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
  editCategories ({ commit }, payload) {
    return $axios.get(`/categories/${payload}`)
  },
  updateCategories ({ dispatch }, payload) {
    $axios
      .put(`/categories/${payload.id}`, payload)
      .then(response => {
        dispatch('getCategories').then(() => {
          Swal.fire(
            'Success!',
            'Successfully updated data',
            'success'
          )
          router.push({ name: 'category.data' })
        })
      }).catch(err => {
        Swal.fire(
          'Error!',
          `${err.response.data.errors}`,
          'error'
        )
      })
  },
  removeCategories ({ commit, dispatch }, payload) {
    $axios
      .delete(`categories/${payload}`)
      .then(response => {
        dispatch('getCategories')
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
