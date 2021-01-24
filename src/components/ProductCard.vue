<template>
  <div class="col-3 mt-3">
    <div class="card">
      <img :src="product.image_url" class="card-img-top" height="300px">
      <div class="card-body">
        <h5 class="card-title mb-4">{{ product.name }}</h5>
        <a href="#" class="btn btn-primary" @click.prevent="productDetail">Product Detail</a>
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
