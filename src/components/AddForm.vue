<template>
  <div>
    <form class="container" @submit.prevent="add">
      <div class="form-group">
        <label>Name</label>
        <input v-model="addData.name" type="text" class="form-control" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label>Image URL</label>
        <input v-model="addData.image_url" type="text" class="form-control" placeholder="enter image url">
      </div>
      <div class="form-group">
        <label>Price</label>
        <input v-model="addData.price" type="number" class="form-control" placeholder="enter price">
      </div>
      <div class="form-group">
        <label>Stock</label>
        <input v-model="addData.stock" type="number" class="form-control" placeholder="enter stock">
      </div>
      <div class="form-group">
        <label>Category</label>
        <input v-model="addData.category" type="text" class="form-control" placeholder="enter category">
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AddForm',
  methods: {
    add () {
      this.$store.dispatch('add', this.addData)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState([
      'addData'
    ])
  }
}
</script>

<style>

</style>
