<template>
  <div class="card-body mt-5">
    <h5 class="row card-title mb-5 border p-2 rounded">Name: {{ product.name }}</h5>
    <h5 class="row card-title mb-5 border p-2 rounded">Stock: {{ product.stock }}</h5>
    <h5 class="row card-title mb-5 border p-2 rounded">Price: {{ product.price }}</h5>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductDetail',
  computed: {
    ...mapState([
      'product'
    ])
  }
}
</script>

<style>

</style>
