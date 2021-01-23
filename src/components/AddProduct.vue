<template>
  <div class="container">
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <label>Product Name</label>
      <input v-model="name" type="text" class="form-control">
      <label>Image Url</label>
      <input v-model="image_url" type="text" class="form-control">
      <label>Price</label>
      <input v-model="price" type="number" class="form-control">
      <label>Stock</label>
      <input v-model="stock" type="number" class="form-control">
      <div>
        <button type="submit" class="btn btn-primary">Add Product</button>
        <button @click="backToHome" type="submit" class="btn btn-primary">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
    },

    backToHome () {
      this.$router.push('/home')
    }
  }

}
</script>

<style>

</style>
