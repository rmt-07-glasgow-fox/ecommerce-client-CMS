<template>
  <div>
    <h1>Product List</h1>
    <div class="container">
      <div class="row justify-content-end my-4">
        <div class="col-3">
          <button class="btn btn-primary">Add Product</button>
        </div>
      </div>
      <div class="row">
        <products-card class="m-1"
        v-for="product in products" :key="product.id"
        :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsCard from '../components/ProductsCard.vue'

export default {
  name: 'Products',
  components: {
    ProductsCard
  },
  props: ['products']
}
</script>
