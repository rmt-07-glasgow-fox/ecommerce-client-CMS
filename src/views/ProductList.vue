<template>
  <div class="about">
    <h1>Daftar Produk Ecommerce</h1>
    <div class="container">
      <div class="row"></div>
      <div class="row">
        <ProductCard
          v-for="product in products" :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'ProductLists',
  components: {
    ProductCard
  },
  props: ['products']
}
</script>

<style>

</style>
