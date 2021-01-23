<template>
  <div class="container">
      <router-link to="/products"
      class="btn btn-primary">Product List</router-link> |
      <router-link
      to="/products/add-product"
      class="btn btn-success"
      >Add Product</router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Products'
}
</script>

<style>

</style>
