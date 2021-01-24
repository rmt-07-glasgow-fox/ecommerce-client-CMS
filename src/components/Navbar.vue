<template>
  <div class="navbar navbar-light bg-light">
    <div class="container d-flex justify-content-between">
    <router-link to="/" class="navbar-brand d-flex align-items-center">
        <strong>E-Commerce CMS</strong>
    </router-link>
    <div class="ml-auto">
        <button class="btn btn-primary me-3" v-if="this.$store.state.isLogin" @click="addProduct">Add Product</button>
        <button class="btn btn-danger" v-if="this.$store.state.isLogin" @click="logout">Logout</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    addProduct () {
      this.$router.push('/addProduct')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('changeIsLogin', false)
      this.$router.push('/loginAdmin')
    }
  }
}
</script>

<style>

</style>
