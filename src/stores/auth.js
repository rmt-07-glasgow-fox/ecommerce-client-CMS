import $axios from '../api/axios'

const actions = {
  submit ({ commit }, payload) {
    localStorage.setItem('token', null)
    commit('SET_TOKEN', null, { root: true })

    $axios.post('/login', payload)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token)
        commit('SET_TOKEN', response.data.access_token, { root: true })
      })
      .catch((error) => {
        commit('SET_ERRORS', error.response.data.errors, { root: true })
      })
  }
}

export default {
  namespaced: true,
  actions
}
