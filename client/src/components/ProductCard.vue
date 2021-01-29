<template>
  <div class="col-3 mb-3">
    <div @click="goToDetail" class="card border">
      <div class="card-image">
        <img :src="product.image_url" class="card-img-top" alt="product image">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
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

<style scoped>
.card-body {
  text-align: left;
}

.card {
  height: 325px;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  height: 200px;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

</style>
