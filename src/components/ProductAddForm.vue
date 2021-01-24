<template>
  <div class="container">
    <product-details></product-details>
    <button class="btn btn-primary" @click.prevent="addProduct">Add Product</button>
  </div>
</template>

<script>
import ProductDetails from './ProductDetails'

export default {
  name: 'ProductAddForm',
  components: {
    ProductDetails
  },
  methods: {
    addProduct: function () {
      this
        .$store
        .dispatch('addProduct')
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
    }
  }
}
</script>

<style scoped>

</style>
