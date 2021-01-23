<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="editProduct(getProduct.id)" class="form-control p-4" style="width: 350px; height: 560px;">

        <h2 class="mb-3" style="text-align: center;">Edit Product</h2>
        <div class="form-floating mb-3">
          <label for="floatingInput">Name</label>
          <input v-model="name" type="text" class="form-control" id="floatingInput" placeholder="Product Name">
        </div>
        <div class="form-floating mb-3">
          <label for="floatingInput2">Image URL</label>
          <input v-model="imageUrl" type="text" class="form-control" id="floatingInput2" placeholder="Image Url">
        </div>
        <!-- <div class="form-floating mb-3">
          <label for="floatingInput4">Category</label>
          <input v-model="category" type="text" class="form-control" id="floatingInput4" placeholder="name@example.com">
        </div> -->
        <div class="form-floating mb-3">
          <label for="floatingInput3">Stock</label>
          <input v-model="stock" type="number" class="form-control" id="floatingInput3" placeholder="Stock">
        </div>
        <div class="form-floating mb-3">
          <label for="floatingInput4">Price</label>
          <input v-model="price" type="number" class="form-control" id="floatingInput4" placeholder="Price">
        </div>

        <button class="btn btn-primary col-12 mx-auto mb-2" style="text-align: center;">Add Products</button>
        <button @click.prevent="backtoDashboards" class="btn btn-danger col-12 mx-auto" style="text-align: center;">Back To Dashboard</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      name: '',
      imageUrl: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    backtoDashboards () {
      this.$router.push('/dashboard')
    },
    editProduct (id) {
      const payload = {
        id,
        name: this.name,
        imageUrl: this.imageUrl,
        stock: this.stock,
        price: this.price
      }
      this.$store.dispatch('editProduct', payload)
      this.$router.push('/dashboard')
    }
  },
  computed: {
    getProduct () {
      return this.$store.state.productDetail
    }
  },
  mounted () {
    this.name = this.getProduct.name
    this.imageUrl = this.getProduct.image_url
    this.genre = this.getProduct.genre
    this.stock = this.getProduct.stock
    this.price = this.getProduct.price
  }
}
</script>

<style>

</style>
