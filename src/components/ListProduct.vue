<template>
<div class="box ListProduct">
  <div class="column">
  <div class="table-container">
  <table class="table">
    <thead>
      <th>Product Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Image</th>
      <th>Action</th>
    </thead>
    <tbody>
      <Product v-for="(product) in products" :key="product.id" :product="product"/>
    </tbody>
  </table>
</div>
</div>
</div>
</template>

<script>
import Product from '../components/Product'
export default {
  components: {
    Product
  },
  name: 'ListProduct',
  data () {
    return {
    }
  },
  methods: {
    fetch () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetch()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
<style>
</style>
