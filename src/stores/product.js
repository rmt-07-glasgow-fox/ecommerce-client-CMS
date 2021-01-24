import Swal from 'sweetalert2'
import router from '../router'
import $axios from '../api/axios'

const state = () => ({
  products: [],
  category: [],
  page: 1,
  size: 5
})

const mutations = {
  ASSIGN_DATA (state, payload) {
    state.products = payload
  },
  ASSIGN_CATEGORY (state, payload) {
    state.category = payload
  },
  SET_PAGE (state, payload) {
    state.page = payload
  }
}

const actions = {
  getProducts ({ commit, state }, payload) {
    let search = typeof payload !== 'undefined' ? payload : ''
    $axios.get(`/products?page=${state.page}&size=${state.size}&q=${search}`)
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
      })
  },
  getCategories ({ commit }) {
    $axios.get('/categories')
      .then(response => {
        commit('ASSIGN_CATEGORY', response.data.data)
      })
  },
  addProduct ({ dispatch }, payload) {
    console.log(payload)
    $axios.post(`/products`, payload)
      .then((response) => {
        dispatch('getProducts').then(() => {
          Swal.fire(
            'Success!',
            `Successfully add new data`,
            'success'
          )
          router.push({ name: 'product.data' })
        })
      })
      .catch((error) => {
        Swal.fire(
          'Error!',
          `${error.response.data.errors}`,
          'error'
        )
      })
  },
  editProduct ({ commit }, payload) {
    return $axios.get(`/products/${payload}`)
  },
  updateProduct ({ dispatch }, payload) {
    $axios.put(`/products/${payload.id}`, payload)
      .then((response) => {
        dispatch('getProducts').then(() => {
          Swal.fire(
            'Success!',
            `Successfully updated data`,
            'success'
          )
        })
        router.push({ name: 'product.data' })
      })
      .catch((error) => {
        Swal.fire(
          'Error!',
          `${error.response.data.errors}`,
          'error'
        )
      })
  },
  removeProduct ({ dispatch, commit }, payload) {
    $axios.delete(`/products/${payload}`)
      .then((response) => {
        dispatch('getProducts').then(() => {
          commit('SET_PAGE', 1)
          Swal.fire(
            'Deleted!',
            `${response.data.message}`,
            'success'
          )
        })
      }).catch(error => {
        Swal.fire(
          'Error!',
          `${error.response.data.errors}`,
          'error'
        )
      })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
