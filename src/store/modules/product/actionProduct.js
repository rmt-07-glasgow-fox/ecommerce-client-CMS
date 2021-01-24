import axios from '@/api/axios.js'
import router from '@/router/index.js'

export default {
  async fetchProducts (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/product'
      })
      context.commit('fetchProducts', data)
    } catch (err) {
      console.log(err)
    }
  },
  async fetchOneProduct (context, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `/product/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      context.commit('fetchOneProduct', data)
    } catch (err) {
      console.log(err)
    }
  },
  async addProduct (context, payload) {
    try {
      await axios({
        method: 'POST',
        url: '/product',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: Number(payload.price),
          stock: Number(payload.stock),
          CategoryId: Number(payload.CategoryId)
        }
      })

      this.dispatch('fetchProducts')
      router.replace('/admindashboard/products')
    } catch (err) {
      console.log(err)
    }
  },
  async updateProduct (context, payload) {
    try {
      await axios({
        method: 'PUT',
        url: `/product/${payload.id}`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: Number(payload.price),
          stock: Number(payload.stock),
          CategoryId: Number(payload.CategoryId)
        }
      })

      this.dispatch('fetchProducts')
      router.replace('/admindashboard/products')
    } catch (err) {
      console.log(err)
    }
  },
  async deleteProduct (context, id) {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `/product/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      this.dispatch('fetchProducts')
      console.log(data.message)
    } catch (err) {
      console.log(err)
    }
  }
}
