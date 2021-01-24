<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="height: 80px">
    <div
      class="container"
      style="display: flex; justify-content: space-between"
    >
      <button @click="toProducts" class="btn btn-sm btn-primary shadow"> All Products </button>
      <button @click="toProductAdd" class="btn btn-sm btn-primary shadow"> Add New Product </button>
      <button @click="toBanners" class="btn btn-sm btn-danger shadow"> All Banners</button>
      <button @click="toBannersAdd" class="btn btn-sm btn-danger shadow"> Add New Banner </button>
      <button @click="logout" class="btn btn-sm btn-success shadow">
        logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    toProductAdd () {
      this.$router.push('/products/add')
    },
    toProducts () {
      this.$router.push('/products')
    },
    toBanners () {
      this.$router.push('/banners')
    },
    toBannersAdd () {
      this.$router.push('/banners/add')
    }
  }
}
</script>
