<template>
  <div>
    <Navbar/>
    <div class="col-6 mx-auto my-4">
      <h5>Update Product</h5>
      <form @submit.prevent="updateProduct">
        <div class="form-group mb-3">
          <label class="mb-2" for="update-name">Product Name</label>
          <input v-model="previousData.name" type="text" class="form-control" id="update-name" placeholder="Bolster">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="update-image_url">Image Url</label>
          <input v-model="previousData.image_url" type="text" class="form-control" id="update-image_url" placeholder="http://">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="update-price">Price</label>
          <input v-model="previousData.price" type="text" class="form-control" id="update-price" placeholder="100000">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="update-stock">Stock</label>
          <input v-model="previousData.stock" type="text" class="form-control" id="update-stock" placeholder="250">
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'UpdateForm',
  methods: {
    getOneProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('getOneProduct', id)
    },
    updateProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.previousData.name,
        image_url: this.previousData.image_url,
        stock: this.previousData.stock,
        price: this.previousData.price
      }
      this.$store.dispatch('updateProduct', payload)
    }
  },
  computed: {
    previousData () {
      return this.$store.state.previousData
    }
  },
  created () {
    this.getOneProduct()
  }
}
</script>

<style>

</style>
