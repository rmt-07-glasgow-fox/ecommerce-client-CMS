<template>
  <div class="m-auto border p-5">
    <div class="mb-3">
      <h1><strong>Update product</strong></h1>
    </div>
    <form-page
      :product="product"
      :state="state">
    </form-page>
  </div>
</template>

<script>
import FormPage from '../components/FormPage'
import { mapState } from 'vuex'

export default {
  name: 'EditProductPage',
  data () {
    return {
      state: 'editPage'
    }
  },
  components: {
    FormPage
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct', this.$route.params.id)
    }
  },
  created () {
    this.fetchProduct()
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
