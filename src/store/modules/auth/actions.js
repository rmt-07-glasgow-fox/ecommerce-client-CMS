import axios from '@/api/axios';

export default {
  async login(context, payload) {
    try {
      const response = await axios.post('/users/login', payload);
      context.commit('setUser', {
        access_token: response.data.access_token,
      });
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  logout(context) {
    localStorage.removeItem('access_token');
    context.commit('setUser', {
      access_token: 'null',
    });
  },
};
