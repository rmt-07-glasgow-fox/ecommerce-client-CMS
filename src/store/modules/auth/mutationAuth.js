export default {
  getUserInfo (state, payload) {
    state.userInfo = payload
  },
  isAdmin (state, bool) {
    state.isAdmin = bool
  }
}
