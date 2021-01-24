<template>
  <div class="navbar navbar-light bg-info">
    <div>
      <router-link to="/home"
      class="btn btn-outline-secondary ml-3">Home</router-link>
      <router-link to="/products"
      class="btn btn-outline-secondary ml-3">Products</router-link>
      <button
      class="btn btn-outline-secondary ml-3"
      @click.prevent="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLogged',
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
