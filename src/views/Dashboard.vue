<template>
  <div class="dashboard">
    <h1>This is dashboard</h1>
    <h3><a href="">Add Product</a></h3>
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
  props: ['products'],
  components: {
    ProductCards
  }
}
</script>

<style>
.productContainer {
  justify-content: center;
}
</style>
