<template>
  <div>
    <h1>Edit Product</h1>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Product Name</label>
          <input v-model="product.name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="image_url" class="form-label">Image URL</label>
          <input v-model="product.image_url" type="text" class="form-control" id="image_url">
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input v-model="product.price" type="number" class="form-control" id="price">
        </div>
          <button v-on:click.prevent="editproduct" type="submit" class="btn btn-primary">Edit Product</button>
          <router-link :to="`/productdetail/${product.id}`" class="btn btn-outline-primary">Cancel</router-link>
      </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  props: ['product'],
  methods: {
    editproduct () {
      const user = {
        id: this.product.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price
      }
      this.$store.dispatch('edit', user)
    }
  }
}
</script>

<style>

</style>
