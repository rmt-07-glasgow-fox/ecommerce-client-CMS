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
import axios from '../api/axios'

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
      axios({
        method: 'post',
        url: 'products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        }
      })
        .then(() => {
          this.name = ''
          this.image_url = ''
          this.stock = ''
          this.price = ''

          this.$router.push('/home')
        })
        .catch((error) => {
          console.log(error)
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
