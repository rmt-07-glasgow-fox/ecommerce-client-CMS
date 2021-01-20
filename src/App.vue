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
    fetchProducts () {
      axios
        .get('/products')
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
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
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
