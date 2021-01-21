<template>
  <div class="col-3">
    <div class="card">
      <img :src="product.image_url" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Rp. {{ product.price }}</p>
        <button @click="goToDetail" class="btn btn-primary">Info</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    goToDetail (payload) {
      this.$router.push('/productdetail/' + this.product.id)
    }
  }
}
</script>

<style>
.card-body {
  text-align: left;
}
</style>
