<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12">
        <h1 class="text-dark">List All Product</h1>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <ProductTable
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTable from '../components/ProductTable'

export default {
  name: 'ListProduct',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    ProductTable
  }
}
</script>

<style>

</style>
