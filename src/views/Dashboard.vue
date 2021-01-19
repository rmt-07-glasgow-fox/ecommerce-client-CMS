<template>
  <div>
    <navbar @handleLogout="handleLogout"/>
    <div class="container mt-3">
      <div class="row mb-3 mt-3">
        <div class="col">
          <b-button variant="primary" @click="handleAddNewProduct" >Add new product</b-button>
        </div>
      </div>
      <router-view
        @newProductData="handleAddProduct"
        :productById="productById"/>
      <div class="row">
        <div class="col table-product text-center">
          <table class="table">
            <thead>
              <tr>
                <th v-for="(field, idx) in fields" :key="idx" scope="col">{{ field }}</th>
              </tr>
            </thead>
            <tbody>
              <product-list
                v-for="product in products"
                :key="product.id"
                :product="product"
                @editProductId="getDataById"
                @deleteDataId="deleteDataById"/>
            </tbody>
          </table>
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
      fields: ['id', 'Image', 'Title', 'Price', 'Stock', 'Action']
    }
  },
  components: { Navbar, ProductList },
  props: ['products', 'fetchProducts', 'productById'],
  methods: {
    handleLogout (payload) {
      this.$emit('handleLogout', payload)
    },
    handleAddNewProduct () {
      this.$router.push('/addproduct')
    },
    handleAddProduct (payload) {
      this.$emit('handleAddProduct', payload)
    },
    getDataById (payload) {
      this.$emit('getDataById', payload)
    },
    deleteDataById (payload) {
      this.$emit('deleteDataById', payload)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
