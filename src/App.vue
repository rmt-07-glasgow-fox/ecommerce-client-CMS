<template>
  <div id="app">
    <router-view :products="products"/>
  </div>
</template>

<script>
import axios from './api/axios'

export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    checkAuth () {
      if (localStorage.getItem('access_token')) {
        this.$router.push('/products')
        this.fetchProducts()
      } else {
        this.$router.push('/')
      }
    },
    fetchProducts () {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.checkAuth()
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
