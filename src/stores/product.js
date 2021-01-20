import $axios from '../api/axios'

const state = () => ({
  products: [],
  page: 1,
  size: 5,
})

const mutations = {
  ASSIGN_DATA(state, payload) {
    state.products = payload
  },
  SET_PAGE(state, payload) {
    state.page = payload
  },
  SET_SIZE(state, payload) {
    state.size = payload
  }
}

const actions = {
  getProducts({ commit, state }, payload) {
    let search = typeof payload !== 'undefined' ? payload : ''
    $axios.get(`/products?page=${state.page}&size=${state.size}&q=${search}`)
      .then((response) => {
        commit('ASSIGN_DATA', response.data)
      })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
