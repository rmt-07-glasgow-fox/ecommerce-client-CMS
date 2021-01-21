<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  methods: {
    getProducts () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
