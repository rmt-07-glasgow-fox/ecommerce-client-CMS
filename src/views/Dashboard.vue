<template>
  <div class="dashboard">
    <h1>This is dashboard</h1>
    <h3><a href="" @click.prevent="addProduct">Add Product</a></h3>
    <router-view />
    <div class="row productContainer">
      <ProductCards
      v-for="(product, index) in products"
      :key="index"
      :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductCards from '../components/ProductCards.vue'

export default {
  name: 'Dashboard',
  components: {
    ProductCards
  },
  methods: {
    addProduct () {
      this.$router.push('/dashboard/add-product')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
.productContainer {
  justify-content: center;
}
</style>
