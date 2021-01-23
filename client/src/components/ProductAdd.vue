<template>
  <div>
    <h1>PRODUCT ADD</h1>
    <form @submit.prevent="addProduct">
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
      <button type="submit" class="btn btn-primary"><i class="fas fa-plus"> Add</i></button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'ProductAdd',
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
    addProduct () {
      const payload = this.newProduct
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.$router.push('/')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL ADD',
            text: valid
          })
        })
    }
  }
}
</script>

<style>

</style>
