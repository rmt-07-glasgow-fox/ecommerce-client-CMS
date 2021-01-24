<template>
  <div class="about">
    <nav-bar></nav-bar>
    <h1 class="mb-4">Add Product</h1>
    <product-add-form></product-add-form>
  </div>
</template>

<script>
import ProductAddForm from '../components/ProductAddForm'

export default {
  name: 'ProductAdd',
  components: {
    ProductAddForm
  },
  created () {
    this.$store.commit('clearProduct')
  }
}
</script>
