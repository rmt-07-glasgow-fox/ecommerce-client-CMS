<template>
  <div class="add">
    <h1>Add Product</h1>
    <form class="p-5" @submit.prevent="addProduct">
      <div class="row mb-3">
        <label for="inputName" class="form-label">Name</label>
        <input v-model="product.name" type="text" class="form-control" id="inputName">
      </div>
      <div class="row mb-3">
        <label for="inputStock" class="form-label">Stock</label>
        <input v-model="product.stock" type="number" class="form-control" id="inputStock">
      </div>
      <div class="row mb-3">
        <label for="inputPrice" class="form-label">Price</label>
        <input v-model="product.price" type="number" class="form-control" id="inputPrice">
      </div>
      <div class="row mb-3">
        <label for="inputImage" class="form-label">Image Url</label>
        <input v-model="product.imageUrl" type="text" class="form-control" id="inputImage">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        stock: '',
        price: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
    }
  }
}
</script>

<style scoped>
form {
  width: 500px;
  align-self: center;
  border: 1px lightblue solid;
  border-radius: 20px;
}

.add {
  margin: 3em auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
