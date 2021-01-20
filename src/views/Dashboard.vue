<template>
  <div>
    <navbar />
    <div class="container mt-3">
      <div class="row mb-3 mt-3">
        <div class="col">
          <b-button variant="primary" @click="handleAddNewProduct" >Add new product</b-button>
        </div>
      </div>
      <router-view />
      <div class="row">
        <div class="col table-product text-center">
          <div v-if="products.length > 0">
            <table class="table">
              <thead>
                <tr>
                  <th v-for="(field, idx) in fields" :key="idx" scope="col">{{ field }}</th>
                </tr>
              </thead>
              <tbody>
                <product-list
                  v-for="(product, idx) in products"
                  :key="product.id"
                  :product="product"
                  :idx="idx"/>
              </tbody>
            </table>
          </div>
          <div v-else>
            <h1>No Data. Please create a new one</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Dashboard',
  data () {
    return {
      fields: ['#', 'Image', 'Title', 'Price', 'Stock', 'Action']
    }
  },
  components: { Navbar, ProductList },
  props: [],
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    handleAddNewProduct () {
      this.$router.push('/addproduct')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
