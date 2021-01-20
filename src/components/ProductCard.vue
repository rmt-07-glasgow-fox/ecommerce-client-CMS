<template>
        <!-- loop this card -->
      <div class="card mb-3 col-12 mx-2 p-3" style="width: 80%; background-color: black;">
        <div class="row g-0">
          <div class="col-md-3">
            <img style="max-width: 200px;" :src="product.imageUrl" class="card-img-top p-2 pt-4">
          </div>
          <div class="col-md-9">
            <div class="card-body" style="text-align: start;">
              <h5 class="card-title text-light">Title: {{ product.name }}</h5>
              <p class="card-text text-light m-0">Genre: {{ product.genre }}</p>
              <p class="card-text text-light m-0">URL: {{ product.imageUrl }}</p>
              <p class="card-text text-light m-0">Stock: {{ product.stock }}</p>
              <p class="card-text text-light m-0 mb-1">Price: {{ product.price }}</p>
              <button @click.prevent="getOneProduct(product)" class="btn btn-light">Update</button>
              <button @click.prevent="deleteOneProduct(product.id)" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <!-- loop this card -->
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    getProductId (currentProductId) {
      this.$store.commit('insertProductId', currentProductId)
    },
    getOneProduct (currentProduct) {
      const currentId = currentProduct.id
      this.$store.commit('insertProductId', currentId)
      this.$store.commit('insertOneProduct', currentProduct)
    },
    deleteOneProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
