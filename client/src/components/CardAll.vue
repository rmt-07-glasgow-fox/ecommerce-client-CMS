<template>
    <div class="row" style="margin-left: 100px">
        <ProductCard
          v-for="Product in products"
          :key="Product.id"
          :Product="Product"
        ></ProductCard>
    </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard
  },
  props: ['products']
}
</script>

<style>

</style>
