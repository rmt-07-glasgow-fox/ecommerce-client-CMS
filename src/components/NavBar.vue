<template>
  <div id="nav">
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/products/add">Add Product</router-link>
    <button @click.prevent="logout" class="logout align-items-center btn btn-warning">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavBar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.logout {
  float: right;
}
</style>
