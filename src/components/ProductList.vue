<template>
  <div class="container mt-4 border py-3">
    <h1>Products List</h1>
    <div class="row">
      <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('showList')
    }
  },
  created () {
    this.fetchProducts()
    console.log(this.products)
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>

div {
  margin: 3em auto;
  border-radius: 25px;
}

</style>
