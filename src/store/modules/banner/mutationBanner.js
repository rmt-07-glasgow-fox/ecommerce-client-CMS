export default {
  fetchBanners (state, payload) {
    state.banners = payload
  },
  fetchOneBanner (state, payload) {
    state.banner = payload
  }
}
