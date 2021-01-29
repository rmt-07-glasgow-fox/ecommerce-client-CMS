<template>
  <form class='mt-4' @submit.prevent='editProduct'>
    <h3>Edit Product</h3>
    <div class="form-group">
      <input type="text" class="form-control" placeholder='Product name...' required='' v-model='product.name'>
    </div>
    <div class="form-group">
      <input type="number" class="form-control" placeholder="Product price..." required='' v-model='product.price'>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Copy image url here..." required='' v-model='product.image_url'>
    </div>
    <div class="form-group">
      <label for='stock'>Number of stock: </label>
      <input type="number" id='stock' class="form-control" required='' v-model='product.stock'>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EditForm',
  watch: {
    errors: function (val, oldVal) {
      if (val.length > 0) {
        this.$swal.fire({
          icon: 'error',
          title: 'Please try again',
          text: this.errors[0],
          footer: '<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400" target="_blank">400 Bad request</a>'
        })
        this.router.push('/product/:id')
      }
    }
  },
  methods: {
    editProduct () {
      const { id } = this.$route.params
      const payload = {
        id,
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock,
        imageUrl: this.product.image_url
      }
      this.$swal.fire({
        title: 'Update product?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          return this.$store.dispatch('editProduct', payload)
        } else if (result.isDenied) {
          this.$swal.fire('No update performed', '', 'info')
        }
      })
        .then(_ => {
          this.$swal.fire('Product updated!', '', 'success')
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log('>>>>>>>', err)
          this.$store.commit('catchError', err.response.data.errors)
        })
    }
  },
  computed: mapState(['errors', 'product'])
}
</script>

<style scoped>

</style>
