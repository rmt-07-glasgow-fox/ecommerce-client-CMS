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
        <button class="btn btn-info btn-sm" @click="update">Update</button>
        <button class="btn btn-danger btn-rounded btn-sm" @click="deleteProduct">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    update () {
      this.$router.push(`/updateProduct/${this.product.id}`)
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
    }
  }
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

.card-img-top {
  height: 135px;
  width: 265px;
}
</style>
