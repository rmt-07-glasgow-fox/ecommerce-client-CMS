<template>
  <div>
    <navbar @handleLogout="handleLogout"/>
    <section class="table-product container mt-3 text-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <product-list v-for="product in products" :key="product.id" :product="product" />
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Dashboard',
  components: { Navbar, ProductList },
  props: ['products', 'fetchProducts'],
  methods: {
    handleLogout (payload) {
      this.$emit('handleLogout', payload)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
