<template>
  <div class="">
    <h4>Edit Product</h4>
    <form @submit.prevent="editProduct" class="row g-3">
      <div class="col-12">
        <label class="form-label">Name</label>
        <input v-model="product.name" type="text" class="form-control" placeholder="Name">
      </div>
      <div class="col-md-6">
        <label class="form-label">Price</label>
        <input v-model="product.price" type="number" class="form-control" placeholder="Price">
      </div>
      <div class="col-md-6">
        <label class="form-label">Stock</label>
        <input v-model="product.stock" type="number" class="form-control" placeholder="Stock">
      </div>
      <div class="col-12">
        <label class="form-label">Image Url</label>
        <input v-model="product.image_url" type="text" class="form-control" placeholder="Image Url">
      </div>
      <div class="col-md-12">
        <label class="form-label">Description</label>
        <textarea v-model="product.description" class="form-control" placeholder="Description" rows="3"></textarea>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-outline-primary">Edit</button>
        <button @click="cancel" class="btn btn-outline-secondary mx-2">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormEdit',
  props: ['product'],
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    editProduct () {
      this.$emit('editProduct', this.product)
    }
  }

}
</script>

<style>

</style>
