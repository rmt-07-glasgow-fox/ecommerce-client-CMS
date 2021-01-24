<template>
  <div class="container">
    <p>Halo</p>
    <div class="card">
      <div class="col">
        <form @submit.prevent="editProduct">
          <div class="form-group mt-3">
            <label for="name">Product Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              placeholder="Product Name">
          </div>
          <div class="form-group">
            <label for="image_url">Image URL</label>
            <input
              type="text"
              class="form-control"
              id="image_url"
              v-model="image_url"
              placeholder="Link">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              v-model="price"
              placeholder="Price">
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input
              type="number"
              class="form-control"
              id="stock"
              v-model="stock"
              placeholder="Stock">
          </div>
            <div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button class="btn btn-warning" @click="changeUpdate(false)">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EditForm',
  props: ['product'],
  data () {
    return {
      name: this.product.name,
      image_url: this.product.image_url,
      price: this.product.price,
      stock: this.product.stock
    }
  },
  methods: {
    editProduct () {
      const payload = {
        name: this.name,
        imageUrl: this.image_url,
        price: this.price,
        stock: this.stock
      }

      this.$store.dispatch('editProduct', payload)
    },
    changeUpdate (input) {
      this.$store.commit('changeUpdate', input)
    }
  },
  computed: {
    ...mapState([

    ])
  }
}
</script>

<style>

</style>
