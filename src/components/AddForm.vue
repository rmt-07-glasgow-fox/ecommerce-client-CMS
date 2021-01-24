<template>
  <div class="container-fluid add-form">
    <form>
      <div class="card">
        <h3 class="card-header">Add New Product</h3>
        <div class="card-body">
            <div class="mb-3">
              <label>Product Name</label>
              <input v-model="payload.name" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label>Image Url</label>
              <input v-model="payload.image_url" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label>Price</label>
              <input v-model="payload.price" type="number" class="form-control">
            </div>
            <div class="mb-3">
              <label>Stock</label>
              <input v-model="payload.stock" type="number" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="add">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    add () {
      this.$store.dispatch('addNewData', this.payload)
    }
  }

}
</script>

<style scoped>
.add-form {
  margin-top: 80px;
  width: 50%;
}
</style>
