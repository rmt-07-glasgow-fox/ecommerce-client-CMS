<template>
  <div>
    <navbar @handleLogout="handleLogout"/>
    <div v-for="product in products" :key="product.id">
      <product-list :product="product"/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductList from '../components/ProductList.vue'
export default {
  name: 'Dashboard',
  components: { Navbar, ProductList },
  props: ['products'],
  methods: {
    handleLogout (payload) {
      this.$emit('handleLogout', payload)
    }
  }
}
</script>

<style>

</style>
