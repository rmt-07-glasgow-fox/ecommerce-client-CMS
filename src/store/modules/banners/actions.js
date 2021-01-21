import axios from '@/api/axios';

export default {
  async addBanner(context, payload) {
    try {
      await axios({
        url: '/banners',
        method: 'post',
        data: payload,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      this.dispatch('fetchBanners');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async fetchBanners(context) {
    try {
      const response = await axios({
        url: '/banners',
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      context.commit('setBanners', response.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async updateBanner(context, payload) {
    try {
      const body = {
        title: payload.title,
        status: payload.status,
        image_url: payload.image_url,
      };
      await axios({
        url: `/banners/${payload.id}`,
        method: 'put',
        data: body,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchBanners');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async deleteBanner(context, payload) {
    try {
      await axios({
        url: `/banners/${payload}`,
        method: 'delete',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchBanners');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
