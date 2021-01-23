import axios from '@/api/axios';

export default {
  async addProduct(context, payload) {
    try {
      await axios({
        url: '/products',
        method: 'post',
        data: payload,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      this.dispatch('fetchProducts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async fetchProducts(context) {
    try {
      const response = await axios({
        url: '/products',
        method: 'get',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      context.commit('setProducts', response.data);
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async updateProduct(context, payload) {
    try {
      const body = {
        name: payload.name,
        price: payload.price,
        stock: payload.stock,
        image_url: payload.image_url,
        image_name: payload.image_name,
        CategoryId: payload.CategoryId,
      };
      await axios({
        url: `/products/${payload.id}`,
        method: 'put',
        data: body,
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchProducts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
  async deleteProduct(context, payload) {
    try {
      await axios({
        url: `/products/${payload}`,
        method: 'delete',
        headers: {
          authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      this.dispatch('fetchProducts');
    } catch (err) {
      err.response.data.map((e) => {
        throw new Error(e.message);
      });
    }
  },
};
