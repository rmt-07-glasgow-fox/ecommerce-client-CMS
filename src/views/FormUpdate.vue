<template>
    <!-- Update Form -->
  <div class="container mt-5">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="updateProduct(getProduct.id)" class="form-control p-4" style="width: 350px; height: 560px;">

        <h2 class="mb-3" style="text-align: center;">Update Product</h2>
        <div class="form-floating mb-3">
          <input v-model="name" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="imageUrl" type="text" class="form-control" id="floatingInput2" placeholder="name@example.com">
          <label for="floatingInput2">Image URL</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="genre" type="text" class="form-control" id="floatingInput4" placeholder="name@example.com">
          <label for="floatingInput4">Genre</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="stock" type="number" class="form-control" id="floatingInput3" placeholder="name@example.com">
          <label for="floatingInput3">Stock</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="price" type="number" class="form-control" id="floatingInput4" placeholder="name@example.com">
          <label for="floatingInput4">Price</label>
        </div>

        <button type="submit" class="btn btn-primary col-12 mx-auto mb-2" style="text-align: center;">Update This Product</button>
        <button class="btn btn-danger col-12 mx-auto" style="text-align: center;">Cancel</button>
      </form>

    </div>
  </div>
  <!-- Update Form -->
</template>

<script>
export default {
  name: 'FormUpdate',
  data () {
    return {
      name: '',
      imageUrl: '',
      genre: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    updateProduct (id) {
      const payload = {
        id,
        name: this.name,
        imageUrl: this.imageUrl,
        genre: this.genre,
        stock: this.stock,
        price: this.price
      }
      this.$store.dispatch('updateProduct', payload)
      this.$router.push('/')
    }
    // getOneFromDatabase () {
    //   const id = this.$route.params
    //   this.$store.dispatch('getOneProduct', id)
    // }
  },
  computed: {
    getProduct () {
      return this.$store.state.oneProduct
    }
  },
  mounted () {
    this.name = this.getProduct.name
    this.imageUrl = this.getProduct.imageUrl
    this.genre = this.getProduct.genre
    this.stock = this.getProduct.stock
    this.price = this.getProduct.price
  }
}
</script>

<style>

</style>
