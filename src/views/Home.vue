<template>

<div>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
          <ProductList
          v-for="(item,index) in products" :key="index"
          :item="item"></ProductList>
      </tbody>
    </table>
    <EditForm></EditForm>
  </div>
</div>

</template>

<script>
import ProductList from '../components/ProductList'
import EditForm from '../components/EditForm'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    ProductList,
    EditForm
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style>

</style>>
