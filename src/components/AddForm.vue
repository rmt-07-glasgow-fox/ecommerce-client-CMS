<template>
<form class='mt-4' @submit.prevent='addProduct'>
    <h3>Add Product</h3>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Product name..." required='' v-model='name'>
    </div>
    <div class="form-group">
      <input type='text' class="form-control" placeholder="Product price..." required='' v-model='price'>
    </div>
    <div class="form-group">
      <label for='stock'>Number of stock: </label>
      <input type='text' id='stock' class="form-control" required='' v-model='stock'>
    </div>
    <div class="form-group">
      <input type='text' id='image_url' class="form-control" placeholder="Copy image url here..." required='' v-model='image_url'>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>
.form-control {
  margin:0 5px;
  margin:5px 0;
}
</style>
