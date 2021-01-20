<template>
  <div>
    <!-- navbar -->
    <Navbar/>
    <div> <!-- content -->
      <div>
        <h1>Tes</h1>
      </div>
      <div class="container">
        <Card
        v-for="product in products"
        :key="product.id"
        :product="product"/>
      </div>
    </div> <!-- content -->
  </div>
</template>

<script>
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'

export default {
  name: 'Products',
  components: {
    Card,
    Navbar
  },
  created () {
    this.$store.dispatch('fetchAllProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}

</script>
