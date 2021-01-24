<template>
  <div class="about">
    <nav-bar></nav-bar>
    <h1 class="mb-4">Edit Product</h1>
    <product-edit-form v-if="found"></product-edit-form>
    <product-not-found v-else/>
  </div>
</template>

<script>
import ProductEditForm from '../components/ProductEditForm'
import ProductNotFound from '../components/ProductNotFound'

export default {
  name: 'ProductEdit',
  components: {
    ProductEditForm, ProductNotFound
  },
  data () {
    return {
      found: true
    }
  },
  created () {
    this
      .$store
      .dispatch('getProductDetails', this.$route.params.productId)
      .then(({ data }) => {
        this.$store.commit('showProductDetails', data)
      })
      .catch(error => {
        console.log(error)
        if (error.response.status === 404) {
          this.found = false
        }
      })
  }
}
</script>
