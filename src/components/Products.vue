<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img-top" style="height: 53%" :src="product.image_url" alt="Card image cap">
      <div class="card-body" style="text-align: left">
        <h5 class="card-title" style="text-align: center">{{ product.name }}</h5>
        <p class="card-text">Price: <span style="float: right">Rp {{ product.price }}</span></p>
        <p class="card-text">Stock: <span style="float: right">{{ product.stock }}</span></p>
        <button @click="toEditForm(product.id)" class="btn btn-dark">Edit</button>
        <button href="#" class="btn btn-dark" style="float: right">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'changePage'],
  methods: {
    toEditForm (id) {
      console.log('masuk edit form di comp')
      this.$store.dispatch('getProductDetail', id)
    }
  }
}
</script>

<style>

</style>
