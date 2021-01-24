<template>
  <table class="table  table-hover">
    <thead class="table-primary">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <product-row
        v-for="product in products"
        :key="product.id"
        :product="product"></product-row>
    </tbody>
  </table>
</template>

<script>
import { mapState } from 'vuex'
import ProductRow from './ProductRow'

export default {
  name: 'ProductList',
  components: {
    ProductRow
  },
  computed: mapState([
    'products'
  ])
}
</script>

<style scoped>

</style>
