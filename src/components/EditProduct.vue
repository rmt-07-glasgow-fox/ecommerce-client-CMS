<template>
  <div class="container mt-5">
    <div class="edit">
      <h1>Edit Product</h1>
      <form class="p-5" @submit.prevent="editProduct">
          <div class="row mb-3">
            <label for="inputName" class="form-label">Product Name</label>
            <input v-model="product.name" type="text" class="form-control" id="inputName">
          </div>
          <div class="row mb-3">
            <label for="inputStock" class="form-label">Stock</label>
            <input v-model="product.stock" type="number" class="form-control" id="inputStock">
          </div>
          <div class="row mb-3">
            <label for="inputPrice" class="form-label">Price</label>
            <input v-model="product.price" type="number" class="form-control" id="inputPrice">
          </div>
          <div class="row mb-3">
            <label for="inputImage" class="form-label">Image Url</label>
            <input v-model="product.image_url" type="text" class="form-control" id="inputImage">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EditProduct',
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.product)
      this.$router.push(`/products/${this.product.id}`)
    }
  },
  computed: {
    ...mapState([
      'product'
    ])
  }
}
</script>

<style scoped>
form {
  align-self: center;
  border: 1px lightblue solid;
  border-radius: 20px;
}

.add {
  margin: 3em auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
