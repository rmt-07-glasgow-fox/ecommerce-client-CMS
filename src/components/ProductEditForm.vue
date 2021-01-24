<template>
  <div class="container">
    <product-details></product-details>
    <div class="row">
      <div class="col">
        <button class="btn btn-danger mx-3" @click.prevent="cancelEdit">Cancel</button>
        <button class="btn btn-primary mx-3" @click.prevent="editProduct">Edit Product</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetails from './ProductDetails'

export default {
  name: 'ProductEditForm',
  components: {
    ProductDetails
  },
  methods: {
    editProduct: function () {
      this
        .$store
        .dispatch('editProduct', this.$route.params.productId)
        .then(resp => {
          this.$store.commit('clearProduct')
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(error => {
          const errorMessage = error.response.data.errors.join('</br>')

          this.$dlg.alert(errorMessage, {
            icon: false,
            messageType: 'error'
          })
        })
    },
    cancelEdit: function () {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style scoped>

</style>
