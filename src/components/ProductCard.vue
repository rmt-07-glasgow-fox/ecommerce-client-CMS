<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img-top" :src="product.image_url" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" @click="goToDetail" class="btn btn-primary mr-2">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    goToDetail () {
      this.$router.push(`/products/${this.product.id}`)
    }
  }
}
</script>

<style>
</style>
