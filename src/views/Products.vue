<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="text-center">
          <h1 class="display-4">Products</h1>
          <p class="lead">Our selection of finest products.</p>
          <button class="btn btn-primary my-1" @click="addProduct">Add product</button>
        </div>

        <ProductTable :productList='filteredProductList' :categories='categories'/>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductTable from '../components/ProductTable'

export default {
  name: 'Products',
  components: {
    ProductTable
  },
  methods: {
    addProduct () {
      this.$router.push({ path: '/products/add' })
    },
    getProducts () {
      this.$store.dispatch('getProducts')
    }
  },
  computed: {
    ...mapState([
      'productList', 'categories', 'chosenCategoryId'
    ]),
    filteredProductList () {
      return this.$store.getters.filteredProductList
    }
  },
  created () {
    this.getProducts()
    this.$store.dispatch('getCategories')
  }

}
</script>

<style>

</style>
