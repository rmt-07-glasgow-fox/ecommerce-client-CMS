<template>
  <div>
    <Navbar/>
    <div class="col-6 mx-auto my-4">
        <h5>Add Product</h5>
        <form @submit.prevent="addProduct">
          <div class="form-group mb-3">
            <label class="mb-2" for="add-name">Product Name</label>
            <input v-model="input.name" type="text" class="form-control" id="add-name" placeholder="Bolster">
          </div>
          <div class="form-group mb-3">
            <label class="mb-2" for="add-image_url">Image Url</label>
            <input v-model="input.image_url" type="text" class="form-control" id="add-image_url" placeholder="http://">
          </div>
          <div class="form-group mb-3">
            <label class="mb-2" for="add-price">Price</label>
            <input v-model="input.price" type="text" class="form-control" id="add-price" placeholder="100000">
          </div>
          <div class="form-group mb-3">
            <label class="mb-2" for="add-stock">Stock</label>
            <input v-model="input.stock" type="text" class="form-control" id="add-stock" placeholder="250">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'AddProduct',
  data () {
    return {
      input: {
        name: '',
        image_url: '',
        stock: '',
        price: ''
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.input)
    }
  }
}
</script>

<style>

</style>
