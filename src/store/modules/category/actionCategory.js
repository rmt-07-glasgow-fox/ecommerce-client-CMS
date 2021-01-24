import axios from '@/api/axios.js'
import router from '@/router/index.js'

export default {
  async fetchCategories (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/category'
      })
      context.commit('fetchCategories', data)
    } catch (err) {
      console.log(err)
    }
  },
  async fetchOneCategory (context, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `/category/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      context.commit('fetchOneCategory', data)
    } catch (err) {
      console.log(err)
    }
  },
  async addCategory (context, payload) {
    try {
      await axios({
        method: 'POST',
        url: '/category',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name
        }
      })

      this.dispatch('fetchCategories')
      router.replace('/admindashboard/categories')
    } catch (err) {
      console.log(err)
    }
  },
  async updateCategory (context, payload) {
    try {
      await axios({
        method: 'PUT',
        url: `/category/${payload.id}`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name
        }
      })

      this.dispatch('fetchCategories')
      router.replace('/admindashboard/categories')
    } catch (err) {
      console.log(err)
    }
  },
  async deleteCategory (context, id) {
    console.log(id)
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `/category/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      this.dispatch('fetchCategories')
      console.log(data.message)
    } catch (err) {
      console.log(err)
    }
  }
}
