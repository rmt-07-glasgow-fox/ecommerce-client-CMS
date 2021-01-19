<template>
  <div class="container">
    <div class="row">
      <router-view @addProduct="addProduct" :products="products" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['products'],
  methods: {
    addProduct (name, price, stock, imageUrl) {
      this.$emit('addProduct', name, price, stock, imageUrl)
    }
  }
}
</script>

<style>

</style>
