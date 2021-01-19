<template>
  <div class="d-flex justify-content-start">
    <Navbar
      @handleLogout="handleLogout"
    ></Navbar>
    <router-view
      :products="products"
      :productToEdit="productToEdit"
      @addProduct="addProduct"
      @getProductId="getProductId"
      @editProduct="editProduct"
      @deleteProduct="deleteProduct"
    ></router-view>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  props: ['getProducts', 'products', 'productToEdit'],
  methods: {
    addProduct (payload) {
      this.$emit('addProduct', payload)
    },
    getProductId (id) {
      this.$emit('getProductId', id)
    },
    editProduct (payload) {
      this.$emit('editProduct', payload)
    },
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    },
    handleLogout () {
      this.$emit('handleLogout')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style>
.table-wraper {
  overflow-y: auto;
  max-height: 20rem;
}
.table-wraper2 {
  overflow-y: auto;
  max-height: 37rem;
}
.w-70 {
  width: 70%;
}
.w-30 {
  width: 30%;
  margin-left: .5rem;
}
</style>
