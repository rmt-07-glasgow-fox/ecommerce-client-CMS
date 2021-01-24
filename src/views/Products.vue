<template>
  <div>
    <!-- navbar -->
    <Navbar/>
    <div class="container mx-auto px-4 mt-20 mb-20"> <!-- content -->
      <div class="container flex flex-row flex-wrap justify-center items-center ">
        <Card
        v-for="product in products"
        :key="product.id"
        :product="product"/>
      </div>
    </div>
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
