import axios from '@/api/axios';

export default {
  async login(context, payload) {
    try {
      const response = await axios.post('/users/login/admin', payload);
      localStorage.setItem('access_token', response.data.access_token);
      context.commit('setUser', {
        access_token: response.data.access_token,
      });
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  autoLogin(context) {
    const token = localStorage.getItem('access_token');
    if (token) {
      context.commit('setUser', { access_token: token });
    }
  },
  logout(context) {
    localStorage.removeItem('access_token');
    context.commit('setUser', {
      access_token: 'null',
    });
  },
};
