<template>
  <div>
    <v-row v-if="products.length > 0">
      <ProductItem v-for="product in products" :key="product.id" :product="product"/>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center">
        NO DATA
          <!-- <v-card>NO DATA</v-card> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ProductItem
  },
  methods: {
    getAllProducts () {
      this.$store.dispatch('getAllProducts', null, { root: true })
    }
  },
  created () {
    this.getAllProducts()
  },
  computed: {
    ...mapState({
      products: state => state.mProducts.products
    })
  }
}
</script>

<style>

</style>
