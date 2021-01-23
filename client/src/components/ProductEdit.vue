<template>
  <div>
    <h1>PRODUCT EDIT</h1>
    <form @submit.prevent="editProduct">
      <div class="mb-3">
        <label for="name" class="form-label">Name Product:</label>
        <input v-model="newProduct.name" type="text" class="form-control" id="name" placeholder="Asus ZenBook 14 UX425EA">
      </div>
      <div class="mb-3">
        <label for="imageurl" class="form-label">Image Url:</label>
        <input v-model="newProduct.image_url" type="text" class="form-control" id="imageurl" placeholder="Image Url">
      </div>
      <div class="mb-3">
        <label for="Price" class="form-label">Price:</label>
        <input v-model="newProduct.price" type="number" class="form-control" id="Price" placeholder="4000000">
      </div>
      <div class="mb-3">
        <label for="Stock" class="form-label">Stock:</label>
        <input v-model="newProduct.stock" type="number" class="form-control" id="Stock" placeholder="100">
      </div>
      <button type="submit" class="btn btn-primary"><i class="fas fa-edit"></i> Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProductEdit',
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    editProduct () {
      const { id } = this.$route.params
      const payload = {
        id,
        data: this.newProduct
      }
      this.$store.dispatch('editProduct', payload)
    },
    getData () {
      const { id } = this.$route.params
      this.$store.dispatch('getData', id)
        .then(({ data }) => {
          this.newProduct.name = data.name
          this.newProduct.image_url = data.image_url
          this.newProduct.price = data.price
          this.newProduct.stock = data.stock
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style>

</style>
