<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link>
    </div>
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
        .get('/products', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          this.products = data.products
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
