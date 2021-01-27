<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="updateProduct">
          <h1>Edit Product</h1>
          <label>Product Name</label>
          <input v-model="name" type="text" class="form-control">
          <label>Image Url</label>
          <input v-model="image_url" type="text" class="form-control">
          <label>Price</label>
          <input v-model="price" type="number" class="form-control">
          <label>Stock</label>
          <input v-model="stock" type="number" class="form-control">
          <label>Category</label>
          <input v-model="category" type="text" class="form-control">
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

export default {
  name: 'EditProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      category: ''
    }
  },
  methods: {
    updateProduct () {
      this.$store.dispatch('updateProduct', {
        id: this.$route.params.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      })
    },

    backToHome () {
      this.$router.push('/home')
    },

    setProduct (data) {
      this.name = data.name
      this.image_url = data.image_url
      this.price = data.price
      this.stock = data.stock
      this.category = data.category
    }
  },
  created () {
    const { id } = this.$route.params
    this.$store.dispatch('fetchEditProduct', { id, setProduct: this.setProduct })
  }

}
</script>

<style>

</style>
