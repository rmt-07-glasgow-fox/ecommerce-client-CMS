<template>
  <div class="home">
    <div>
      <Navbar/>
    </div>
    <br>
    <div class="container">
      <div class="row">
      <ProductCards v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCards from '../components/ProductsCard'
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    ProductCards,
    Navbar
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('getProducts')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
<style scoped>
/* .row {
  width: 100vh;
} */
</style>
