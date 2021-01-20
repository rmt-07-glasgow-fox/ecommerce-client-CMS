<template>
  <div id="app">
    <div class="flex bg-gradient-to-r bg-gray-300">
      <div id="nav" class="bg-gray-800 h-screen sticky top-0 w-auto flex flex-col justify-between">
        <div class="p-5"><span class="font-bold uppercase text-green-400 text-lg">Tokosidia<br>CMS</span></div>
        <router-link to="/" class="p-10"><span class="text-white font-bold">Home</span></router-link>
        <router-link to="/login" class="p-10"><span class="text-white font-bold">Login</span></router-link>
        <div>
        </div>
        <router-link to="/about" class="p-10"><span class="text-white font-bold">About</span></router-link>
      </div>
    <router-view class="ml-auto"
    :products="products"
    :categories="categories"></router-view>
    </div>
  </div>
</template>

<script>
import axios from './api/axios'
export default {
  data () {
    return {
      products: [],
      categories: []
    }
  },
  methods: {
    async getProducts () {
      try {
        const products = await axios({
          method: 'GET',
          url: '/products',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.products = products.data
      } catch (err) {
        this.$swal({
          icon: 'Warning',
          text: err.response.data.message
        })
      }
    },
    async getCategories () {
      try {
        const categories = await axios({
          method: 'GET',
          url: '/categories',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.categories = categories.data
      } catch (err) {
        this.$swal({
          icon: 'Warning',
          text: err.response.data.message
        })
      }
    },
    checkAuth () {
      if (localStorage.getItem('access_token')) {
        this.getCategories()
        this.getProducts()
      }
    }
  },
  created () {
    this.checkAuth()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
