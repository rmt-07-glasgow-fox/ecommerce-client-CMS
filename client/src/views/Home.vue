<template>
  <div class="d-flex justify-content-start">
    <Navbar></Navbar>
    <router-view
      :productToEdit="productToEdit"
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
  props: ['productToEdit'],
  methods: {
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
