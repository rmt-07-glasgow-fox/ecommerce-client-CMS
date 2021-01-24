export default {
  fetchCategories (state, payload) {
    state.categories = payload
  },
  fetchOneCategory (state, payload) {
    console.log(payload)
    state.category = payload
  }
}
