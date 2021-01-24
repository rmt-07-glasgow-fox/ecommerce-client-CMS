<template>
  <div class="card">
    <div class="col">
      <form @submit.prevent="addProduct">
        <div class="form-group mt-3">
          <label for="name">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="form_add.name"
            placeholder="Product Name">
        </div>
        <div class="form-group">
          <label for="image_url">Image URL</label>
          <input
            type="text"
            class="form-control"
            id="image_url"
            v-model="form_add.image_url"
            placeholder="Link">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
            v-model="form_add.price"
            placeholder="Price">
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input
            type="number"
            class="form-control"
            id="stock"
            v-model="form_add.stock"
            placeholder="Stock">
        </div>
        <div class="form-group">
          <label for="status">Status</label>
          <select class="custom-select custom-select-sm" v-model="form_add.status">
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary mb-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AddForm',
  methods: {
    addProduct () {
      const input = {
        name: this.form_add.name,
        imageUrl: this.form_add.image_url,
        price: this.form_add.price,
        stock: this.form_add.stock,
        status: this.form_add.status
      }
      this.$store.dispatch('addProduct', input)
    }
  },
  computed: {
    ...mapState([
      'form_add'
    ])
  }
}
</script>

<style>

</style>
