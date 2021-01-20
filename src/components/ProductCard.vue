<template>
  <div class="col-3">
    <div class="card">
        <img class="card-img-top" :src="product.image_url">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Rp. {{ product.price }}</p>
        <p class="card-text">Sisa: {{ product.stock }}</p>
      </div>
      <div class="card-body">
        <a href="#" class="card-link">Edit Product</a>
        <a href="#" class="card-link">Delete Product</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 5px;
}
div .col-3 {
  padding: 10px;
}
</style>
