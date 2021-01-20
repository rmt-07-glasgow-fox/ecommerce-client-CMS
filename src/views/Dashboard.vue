<template>
  <div class="dashboard-product">
    <Reveal>
      <a id="dashboard" href="#">
        <span>Dashboard</span>
      </a>
      <a id="add-form-product" href="#">
        <span>Add Product</span>
      </a>
      <br><br><br>
      <a id="logout" href="#" @click.prevent="logoutHandler">
        <span>Logout</span>
      </a>
    </Reveal>
    <div id="app">
      <Menu/>
      <main id="page-wrap">
        <h1>Hello From Dashboard</h1>
        <ProductsTable />
      </main>
    </div>
  </div>
</template>

<script>
import { Reveal } from 'vue-burger-menu'
import ProductsTable from '@/components/ProductsTable.vue'

export default {
  components: {
    Reveal,
    ProductsTable
  },
  methods: {
    logoutHandler () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
