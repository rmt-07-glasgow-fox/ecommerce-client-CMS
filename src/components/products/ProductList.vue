<template>
  <v-app>
    <v-container fluid>
      <v-row class="mb-5">
        <v-col cols="12" md="6" class="m-0 p-0">
            <v-text-field
              label="Search Products"
              prepend-icon="mdi-magnify"
              color="accent"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex justify-end align-center mt-4">
            <v-spacer></v-spacer>
            <v-chip class="ma-2 " color="accent accent-4">{{ products.length }} items</v-chip>
            <v-btn icon color="pink" class="">
              <v-icon color="accent" class="">mdi-view-dashboard</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <ProductItem v-for="product in products" :key="product.id" :product="product" :refresh="getAllProducts"/>
      </v-row>
    </v-container>
  </v-app>
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
      this.$store.dispatch('getAllProducts')
    }
  },
  created () {
    this.getAllProducts()
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
