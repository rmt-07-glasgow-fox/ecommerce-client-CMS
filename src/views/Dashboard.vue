<template>
  <div class="dashboard-product">
    <Navbar />
    <div id="app">
      <Menu/>
      <main id="page-wrap">
        <h1>Dashboard</h1>
        <ProductsTable />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ProductsTable from '@/components/ProductsTable.vue'

export default {
  name: 'Dashboard',
  components: {
    ProductsTable,
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getAllProduct')
  }
}
</script>

<style scoped>

</style>
