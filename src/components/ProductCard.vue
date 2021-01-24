<template>
    <div class="col-3 mb-4">
      <div class="card" style="width: 17rem;">
          <img :src="product.image_url" class="card-img-top" height="250px">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Price: {{ product.price }}</p>
            <p class="card-text">Stock: {{ product.stock }}</p>
            <button class="btn btn-primary me-3" @click.prevent="updateProduct">Update</button>
            <button @click.prevent="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    updateProduct () {
      this.$store.commit('changeIsLogin', true)
      this.$router.push(`/updateProduct/${this.product.id}`)
    }
  }
}
</script>

<style>

</style>
