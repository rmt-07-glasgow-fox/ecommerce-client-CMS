<template>
  <div class="container border shadow p-3 mb-5 bg-white rounded">
    <h1>Add Product</h1>
    <div>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Product Name</label>
          <input v-model="name" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Image URL</label>
          <input v-model="image_url" type="text" class="form-control" id="password">
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input v-model="price" type="number" class="form-control" id="price">
        </div>
        <div class="mb-3">
          <label for="stock" class="form-label">Stock</label>
          <input v-model="stock" type="number" class="form-control" id="stock">
        </div>
          <button v-on:click.prevent="addproduct" type="submit" class="btn btn-primary">Add Product</button>
      </form>
    </div>
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
    addproduct () {
      const user = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addproduct', user)
        .then((data) => {
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  padding: 20px;
  height: 500px;
  width: 350px;
}
</style>
