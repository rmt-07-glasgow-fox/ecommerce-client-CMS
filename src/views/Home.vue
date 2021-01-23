<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand" href="#" @click.prevent="showAll">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#" @click.prevent="showAddForm" >Add New Product!<span class="sr-only">(current)</span></a>
              </li>
          </ul>
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" @click.prevent='logoutsubmit' href="#">Log Out</a>
              </li>
          </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <div class="row row-cols-4">
        <Products v-for="product in $store.state.products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '../components/Products'
export default {
  name: 'Home',
  components: {
    Products
  },
  methods: {
    logoutsubmit () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
<style>
</style>
