export default {
  fetchProducts (state, payload) {
    state.products = payload
  },
  fetchOneProduct (state, payload) {
    state.product = payload
  }
}
