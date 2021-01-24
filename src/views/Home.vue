<template>
  <div class="container-fluid">
    <navbar></navbar>

    <div class="home container-fluid d-flex flex-wrap justify-content-around align-items-center">
      <Product
        v-for="product in products.data"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Product
  },
  methods: {
    allProducts () {
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.allProducts()
  }
}
</script>

<style scoped>
.home{
  margin-top: 80px;
}
</style>
