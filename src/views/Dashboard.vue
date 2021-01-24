<template>
<div>
  <div>
      <Navbar/>
  </div>
  <div class="container-fluid">
    <div class="row">
      <h3 style="float:left; margin-top: 50px; margin-left: 20px">Product: </h3>
    </div>
    <div class="row">
      <ProductBody
      v-for="product in products"
      :key="product.id"
      :product="product"/>
    </div>
  </div>
</div>
</template>

<script>
import ProductBody from '@/components/ProductBody.vue'
import Navbar from '../components/Navbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    ProductBody,
    Navbar
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchData')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style>

</style>
