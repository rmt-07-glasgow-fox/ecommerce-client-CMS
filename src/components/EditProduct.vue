<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="updateProduct">
          <h1>Edit Product {{ product.name }}</h1>
          <label>Product Name</label>
          <input v-model="name" type="text" class="form-control">
          <label>Image Url</label>
          <input v-model="image_url" type="text" class="form-control">
          <label>Price</label>
          <input v-model="price" type="number" class="form-control">
          <label>Stock</label>
          <input v-model="stock" type="number" class="form-control">
          <div>
            <button type="submit" class="btn btn-primary">Update</button>
            <button @click="backToHome" type="submit" class="btn btn-primary">Back</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'EditProduct',
  data () {
    return {
      product: {},
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    fetchEditProduct () {
      const { id } = this.$route.params
      axios({
        method: 'get',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.product = data
          this.name = data.name
          this.image_url = data.image_url
          this.price = data.price
          this.stock = data.stock
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateProduct () {
      const { id } = this.$route.params
      axios({
        method: 'put',
        url: 'products/' + id,
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
        .then(({ data }) => {
          this.name = ''
          this.image_url = ''
          this.stock = ''
          this.price = ''
          this.$router.push('/home')
        })
        .catch((error) => {
          console.log(error, 'UPDATE ERROR')
        })
    },
    backToHome () {
      this.$router.push('/home')
    }
  },
  created () {
    this.fetchEditProduct()
  }

}
</script>

<style>

</style>
