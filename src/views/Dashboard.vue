<template>
  <div class="dashboard-product">
    <Navbar />
    <div id="app">
      <Menu/>
      <main id="page-wrap">
        <h1>Dashboard</h1>
        <ProductsTable />
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ProductsTable from '@/components/ProductsTable.vue'

export default {
  components: {
    ProductsTable,
    Navbar
  }
}
</script>

<style scoped>

</style>
