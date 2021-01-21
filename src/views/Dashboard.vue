<template>
  <div>
    <navbar />
    <div class="container mt-3">
      <div class="row mb-3 mt-3">
        <div class="col">
          <b-button variant="primary" @click="handleAddNewProduct" >Add new product</b-button>
        </div>
        <div class="col">
          <div class="form-group mt-1 row">
              <label for="input-category" class="col-sm-2 col-form-label">Category</label>
              <div class="col-sm-10 col-10">
                <b-form-select
                  v-model="filterCategory"
                  :options="categories"
                  class="form-control"
                  value-field="id"
                  text-field="name"
                  id="input-category">
                  <!-- <template #first>
                    <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                  </template> -->
                  <template #first>
                    <b-form-select-option :value="'allData'">All Categories</b-form-select-option>
                  </template>
                </b-form-select>
              </div>
            </div>
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
      fields: ['#', 'Image', 'Title', 'Price', 'Stock', 'Category', 'Action'],
      filterCategory: ''
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
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  },
  computed: {
    products () {
      // return this.$store.state.products
      return this.$store.getters.filterCategory
    },
    categories () {
      return this.$store.state.category.categories
    }
  },
  watch: {
    filterCategory (newVal) {
      this.$store.commit('changeCategory', newVal)
    }
  }
}
</script>

<style>

</style>
