<template>
  <div>
      <h1 class="m-3">Product List</h1>
      <div class="row">
        <ProductCard v-for="product in productList" :key="product.id" :product="product"/>
      </div>
      <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '../components/ProductCard'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  created () {
    this.$store.dispatch('getProducts')
      .catch(err => {
        const message = err.response.data.message
        this.$store.dispatch('sweetError', message)
      })
  },
  computed: {
    ...mapState([
      'productList'
    ])
  }
}
</script>

<style>
  a:hover{
    cursor: pointer;
  }
</style>
