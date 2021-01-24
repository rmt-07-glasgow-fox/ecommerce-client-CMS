export default {
  fetchCategories (state, payload) {
    state.categories = payload
  },
  fetchOneCategory (state, payload) {
    state.category = payload
  }
}
