<template>
  <div class="card">
    <img :src="product.image_url">
    <h4>{{ product.name }}</h4>
    <p>Rp. {{ product.price }}</p>
    <p>Stok: {{ product.stock }}</p>
    <div class="buttons">
      <a href="#" @click.prevent="populateProduct(product.id)">Edit</a>
      <a href="#" @click.prevent="deleteProduct(product.id)">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    populateProduct (id) {
      this.$emit('populateProduct', id)
    },
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    }
  }
}
</script>
