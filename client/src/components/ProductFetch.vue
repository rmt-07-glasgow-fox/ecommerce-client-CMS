<template>
  <div>
    <ProductList
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
import { mapState } from 'vuex'

export default {
  name: 'ProductFetch',
  components: {
    ProductList
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
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
