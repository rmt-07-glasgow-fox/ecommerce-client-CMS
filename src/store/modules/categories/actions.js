import axios from '@/api/axios';

export default {
  async addCategory(context, payload) {
    try {
      await axios({
        url: '/categories',
        method: 'post',
        data: payload,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCategories');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async fetchCategories(context) {
    try {
      const response = await axios({
        url: '/categories',
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      context.commit('setCategories', response.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async updateCategory(context, payload) {
    try {
      const body = {
        name: payload.name,
      };
      await axios({
        url: `/categories/${payload.id}`,
        method: 'put',
        data: body,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCategories');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async deleteCategory(context, payload) {
    try {
      await axios({
        url: `/categories/${payload}`,
        method: 'delete',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchCategories');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
