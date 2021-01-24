<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="ml-5">
          <button v-on:click="logOut()" class="btn btn-danger btn-sm">Log Out</button>
        </div>
        <div class="ml-5">
          <button v-on:click="addProduct()" class="btn btn-success btn-sm">Add New Product</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logOut () {
      this.$store.dispatch('logOut')
      this.$router.push('/login')
    },
    addProduct () {
      this.$router.push('/addproduct')
    }
  }
}
</script>

<style>

</style>
