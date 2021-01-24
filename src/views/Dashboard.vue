<template>
  <div class="dashboard">
    <nav-bar></nav-bar>
    <div class="container">
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Dashboard',
  components: {
    ProductList
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
