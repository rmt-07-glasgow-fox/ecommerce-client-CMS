<template>
<div class="container w-25 p-5 border" style="margin-top: 50px; border-radius: 10px">
  <h2 style="margin-bottom: 20px">Add Product</h2>
  <form @submit.prevent="addProduct">
    <div class="form-group">
      <label for="product-name">Product Name:</label>
      <input type="text" class="form-control" placeholder="enter product name" v-model='payload.name'>
    </div>
    <div class="form-group">
      <label for="product-name">Image URL:</label>
      <input type="text" class="form-control" placeholder="enter image link" v-model='payload.image_url'>
    </div>
    <div class="form-group">
      <label for="product-name">Product Stock:</label>
      <input type="number" class="form-control" placeholder="enter product stock" v-model='payload.stock'>
    </div>
    <div class="form-group">
      <label for="product-name">Product Price:</label>
      <input type="number" class="form-control" placeholder="enter product price" v-model='payload.price'>
    </div>
    <button type="submit" class="btn btn-primary">Add Product</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        stock: null,
        price: null
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.payload)
        .then(data => {
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
