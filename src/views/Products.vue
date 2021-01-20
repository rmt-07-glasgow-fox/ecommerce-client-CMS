<template>
  <v-app>
    <ProductList/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'

export default {
  components: {
    ProductList
  }
}
</script>

<style>

</style>
