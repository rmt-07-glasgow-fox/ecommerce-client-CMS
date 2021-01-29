<template>
  <div class="dashboard">
    <div class='container'>
      <NavbarDashboard />
    </div>
    <div class='row mb-5'>
      <h1>Dashboard</h1>
    </div>
    <div class="container">
      <div class='row'>
        <ContentCard v-for='product in products' :key='product.id' :product='product'/>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import ContentCard from '../components/ContentCard'
export default {
  Name: 'Dashboard',
  components: {
    NavbarDashboard,
    ContentCard
  },
  computed: {
    products () {
      return this.$store.getters.filterByCategory
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
