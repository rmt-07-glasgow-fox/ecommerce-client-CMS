import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state() {
    return {
      access_token: null,
    };
  },
  actions,
  getters,
  mutations,
};
