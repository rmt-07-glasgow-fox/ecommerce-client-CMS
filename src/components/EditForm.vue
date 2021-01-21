<template>
  <div>
    <form class="container" @submit="update()">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="product.name">
      </div>
      <div class="form-group">
        <label>Image URL</label>
        <input type="text" class="form-control" v-model="product.image_url">
      </div>
      <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control" v-model="product.price">
      </div>
      <div class="form-group">
        <label>Stock</label>
        <input type="number" class="form-control" v-model="product.stock">
      </div>
      <div class="form-group">
        <label>Category</label>
        <input type="text" class="form-control" v-model="product.category">
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EditForm',
  methods: {
    fetchOneProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchOneProduct', id)
    },
    update () {
      const id = this.$route.params.id
      this.$store.dispatch('update', id)
    }
  },
  created () {
    this.fetchOneProduct()
  },
  computed: {
    ...mapState([
      'product'
    ])
  }
}
</script>

<style>

</style>
