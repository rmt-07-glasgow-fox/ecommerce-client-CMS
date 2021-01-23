<template>
  <div class="container" id="product">
    <div class="row"></div>
    <div class="row">
      <div class="card-deck" id="allProduct"
        v-if="products.length > 0">
        <product-card
          v-for="product in products"
          :key="product.id"
          :data="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Product',
  components: {
    ProductCard
  },
  data () {
    return {
    }
  },
  methods: {
    setupProducts () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.setupProducts()
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
