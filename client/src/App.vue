<template>
  <div id="app">
    <div class="border shadow p-3 mb-5 bg-white rounded" id="nav">
      <div v-if="access_token">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/addproduct">Add Product</router-link> |
        <button v-on:click="logout" class="btn btn-outline-danger" to="/about">Logout</button>
      </div>
      <div v-else >
        <router-link class="btn btn-outline-primary" to="/login">Login</router-link> |
        <router-link class="btn btn-outline-secondary" to="/register">Register</router-link>
      </div>
    </div>
    <router-view :products="products"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      products: [],
      access_token: localStorage.getItem('access_token')
    }
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
