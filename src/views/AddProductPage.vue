<template>
  <div class="border p-5 m-auto">
    <div class="mb-3">
      <h1><strong>Add new product</strong></h1>
    </div>
    <form-page
      :product="product"
      :state="state">
    </form-page>
  </div>
</template>

<script>
import FormPage from '../components/FormPage'

export default {
  name: 'AddProductPage',
  data () {
    return {
      product: {
        categoryId: ''
      },
      state: 'addProduct'
    }
  },
  components: {
    FormPage
  }
}
</script>

<style>

</style>
