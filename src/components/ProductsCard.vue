<template>
  <div class="card" style="width: 16rem;">
    <img :src="product.image_url" class="card-img-top" :alt="product.name" height="200px">
    <div class="card-body">
      <h5 class="card-title text-center">{{ product.name }}</h5>
      <p class="card-text">Price: Rp. {{ product.price }}</p>
          <p class="card-text">Stock: {{ product.stock }}</p>
      <div class="text-center">
        <a href="#" class="btn btn-primary text-center" @click.prevent="details(product.id)">View Details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsCard.vue',
  props: ['product'],
  methods: {
    details (id) {
      this.$router.push(`/products/${id}`)
    }
  }
}
</script>

<style>

</style>
