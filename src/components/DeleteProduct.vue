<template>
  <div class="card container my-auto mx-auto" style="width: 20rem;">
    <div class="card-body">
      <h5 class="card-title">Delete Confirmation</h5>
      <p class="card-text">Are you sure want to delete this product?</p>
      <a href="#" class="btn btn-danger mr-2" @click.prevent="deleteProduct">Yes</a>
      <a href="#" class="btn btn-success ml-2" @click.prevent="backToDetail">Cancel</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DeleteProduct',
  methods: {
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
    },
    backToDetail () {
      this.$router.push(`/products/${this.product.id}`)
    }
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
