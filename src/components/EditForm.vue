<template>
  <form class='mt-4' @submit.prevent='editProduct'>
    <h3>Edit Product</h3>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Product name..." required='' v-model='name'>
    </div>
    <div class="form-group">
      <input type="number" class="form-control" placeholder="Product price..." required='' v-model='price'>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Copy image url here..." required='' v-model='image_url'>
    </div>
    <div class="form-group">
      <label for='stock'>Number of stock: </label>
      <input type="number" id='stock' class="form-control" required='' v-model='stock'>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      name: '',
      price: '',
      stock: null,
      image_url: ''
    }
  },
  methods: {
    editProduct () {
      const { id } = this.$route.params
      const payload = {
        id,
        name: this.name,
        price: this.price,
        stock: this.stock,
        imageUrl: this.image_url
      }
      this.$swal.fire({
        title: 'Update product?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire('Product updated!', '', 'success')
          return this.$store.dispatch('editProduct', payload)
        } else if (result.isDenied) {
          this.$swal.fire('No update performed', '', 'info')
        }
      })
        .then(({ data }) => {
          this.$router.push('/dashboard')
        })
        .catch(console.log)
    }
  }
}
</script>

<style scoped>

</style>
