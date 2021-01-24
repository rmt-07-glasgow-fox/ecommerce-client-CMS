<template>
  <div class="products">
    <h1>This is yours</h1>
    <div class="d-flex justify-content-end">
      <button @click="goToAdd" class="btn btn-success">Add Product</button>
    </div> <br>
    <div class="container">
      <div class="row d-flex justify-content-around">
        <ProductList
          v-for="productlist in productlists"
          :key="productlist.id"
          :productlist="productlist"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import axios from '../api/axios'
import ProductList from '../components/ProductList'

export default {
  name: 'Productlist',
  components: {
    ProductList
  },
  methods: {
    goToAdd () {
      this.$router.push({ name: 'AddProduct' })
    }
  },
  created () {
    this.$store.dispatch('fetchReadroduct')
  },
  computed: {
    productlists () {
      return this.$store.state.products
    }
  }
}
</script>
