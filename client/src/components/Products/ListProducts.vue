<template>
  <div class="p-3 bg-white rounded shadow-sm">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="( product, idx ) in products"
          :key="product.id">
          <th scope="row">{{ idx + 1 }}</th>
          <td class="text-primary product-name"
            @click="productDetail(product)">
            {{ product.name }}
          </td>
          <td>IDR {{ product.price }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ListProducts',
  methods: {
    productDetail (product) {
      this.$emit('productDetail', product)
    }
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  created () {
    console.log('created')
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
.product-name:hover {
  cursor: pointer;
}
</style>
