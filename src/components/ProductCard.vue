<template>
  <div class="col-3 mt-5">
    <div class="card">
      <img :src="product.image_url" class="card-img-top" height="300px">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <div class="row mb-3">
          <div class="col-auto card-text">Stock {{ product.stock }}</div>
          <div class="col-auto card-text">Price {{ product.price }}</div>
        </div>
        <a href="#" class="btn btn-primary" @click.prevent="productDetail">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    productDetail () {
      this.$router.push(`/products/${this.product.id}`)
    }
  }
}
</script>

<style>

</style>
