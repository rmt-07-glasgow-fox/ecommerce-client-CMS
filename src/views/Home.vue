<template>
  <div class="home">
  <!-- card container for cms -->
  <div class="container-fluid m-0 p-0" style="width: 100%;">
    <div class="row justify-content-between m-3 ">
      <!-- loop this card -->
      <ProductCard
        v-for="product in allProduct"
        :key="product.id"
        :product="product"
      />
      <!-- loop this card -->

    </div>
  </div>
  <!-- card container for cms -->
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    allProduct () {
      return this.$store.state.allProduct
    }
  }
}
</script>
