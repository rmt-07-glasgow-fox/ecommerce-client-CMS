import mutations from './mutationAuth.js'
import actions from './actionAuth.js'
import getters from './getterAuth.js'

export default {
  state: {
    userInfo: {},
    isAdmin: false
  },
  mutations,
  actions,
  getters
}
