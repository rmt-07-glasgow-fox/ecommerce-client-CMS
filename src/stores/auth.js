import $axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

const actions = {
  submit ({ commit }, payload) {
    localStorage.setItem('token', null)
    commit('SET_TOKEN', null, { root: true })

    $axios.post('/login', payload)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token)
        commit('SET_TOKEN', response.data.access_token, { root: true })
        router.push({ name: 'home' })
        Swal.fire(
          'success!',
          `Login successfully`,
          'success'
        )
      })
      .catch((error) => {
        Swal.fire(
          'error!',
          `${error.response.data.errors}`,
          'error'
        )
      })
  }
}

export default {
  namespaced: true,
  actions
}
