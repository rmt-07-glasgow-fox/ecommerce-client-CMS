<template>
    <!-- Add Form -->
  <div class="container mt-5">
    <div class="d-flex justify-content-center">
      <form @submit.prevent="addProduct" class="form-control p-4" style="width: 350px; height: 560px;">

        <h2 class="mb-3" style="text-align: center;">Add New Product</h2>
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

        <button class="btn btn-primary col-12 mx-auto mb-2" style="text-align: center;">Add This Product</button>
        <button class="btn btn-danger col-12 mx-auto" style="text-align: center;">Cancel</button>
      </form>

    </div>
  </div>
  <!-- Add Form -->
</template>

<script>
export default {
  name: 'FormAdd',
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
    addProduct () {
      const payload = {
        name: this.name,
        imageUrl: this.imageUrl,
        genre: this.genre,
        stock: this.stock,
        price: this.price
      }
      this.$store.dispatch('createProduct', payload)
    }
  }
}
</script>

<style>

</style>
