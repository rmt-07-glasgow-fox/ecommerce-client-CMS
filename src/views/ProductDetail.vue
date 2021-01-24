<template>
  <div>
    <div id="bar" class="d-flex align-center">
      <v-btn class="ma-2 mr-auto" color="accent" dark :to="{name: 'Products'}">
        <v-icon dark left>mdi-arrow-left</v-icon>Back
      </v-btn>
      <div>
        <v-btn class="ma-2 white--text" color="primary" :to="{name: 'Edit Product', params: {id: $route.params.id}}" rounded dark>
          Update <v-icon right dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="error" class="ml-2" fab small dark @click="deleteProduct">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </div>
    <v-row align="center" class="ma-0">
      <!--  -->
      <v-col cols="12" md="6" align="center">
        <v-img
          :src="product.image_url"
          width="400" height="400" class="ma-2"/>
        <v-chip class="ma-2" color="pink" label text-color="white" v-if="product.Category">
          <v-icon left>mdi-label</v-icon>{{ product.Category.name }}
        </v-chip>
        <v-chip class="ma-2" label v-else> No Category </v-chip>
      </v-col>
      <v-col cols="12" md="5" class="mr-5">
        <v-card align="center" class="pa-10" outlined>
          <h1 class="mb-5" style="font-size: 40px">{{ product.name }}</h1>
          <v-chip :ripple="false" color="success" outlined class="mb-5">
            <h2>Rp. {{ product.price }}</h2>
          </v-chip><br>
          <v-chip :ripple="false" color="accent">
            <h2>{{ product.stock }} items left</h2>
          </v-chip>
          <v-btn
            @click="updateStock(product.stock)"
            class="mx-2"
            fab
            dark
            x-small
            color="accent"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    getOneProduct () {
      const productId = this.$route.params.id
      this.$store.dispatch('getOneProduct', productId, { root: true })
    },
    deleteProduct () {
      const productId = this.$route.params.id
      this.$store.dispatch('deleteProductModal', productId, { root: true })
    },
    updateStock (stock) {
      const id = this.$route.params.id
      this.$store.dispatch('updateStockModal', {
        id: id,
        currentStock: stock
      }, { root: true })
    }
  },
  created () {
    this.getOneProduct()
  },
  computed: {
    ...mapState({
      product: state => state.mProducts.product
    })
  }
}
</script>

<style>

</style>
