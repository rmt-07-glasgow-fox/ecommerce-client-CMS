<template>
  <div>
    <div class="navbar navbar-light bg-info">
      <div>
        <router-link to="/home"
        class="btn btn-outline-secondary ml-3">Home</router-link>
        <router-link to="/products"
        class="btn btn-outline-secondary ml-3">Product List</router-link>
        <router-link
        to="/products/add-product"
        class="btn btn-outline-secondary ml-3"
        >Add Product</router-link>
        <button
        class="btn btn-outline-secondary ml-3"
        @click.prevent="logout">Logout</button>
      </div>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Products',
  methods: {
    logout () {
      this.$router.push('/')
      this.$store.commit('successLogout')
    }
  }
}
</script>

<style>

</style>
