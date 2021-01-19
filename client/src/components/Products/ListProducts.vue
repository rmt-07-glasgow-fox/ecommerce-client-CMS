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
export default {
  name: 'ListProducts',
  props: ['products'],
  methods: {
    productDetail (product) {
      this.$emit('productDetail', product)
    }
  }
}
</script>

<style>
.product-name:hover {
  cursor: pointer;
}
</style>
