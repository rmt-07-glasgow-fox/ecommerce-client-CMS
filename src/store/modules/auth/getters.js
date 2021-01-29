export default {
  acccess_token(state) {
    return state.access_token;
  },
  isAuthenticated(state) {
    return !!state.access_token;
  },
};
