<template>
  <div>
    <h2>{{ product.name }}</h2>
    <h2>{{ product.price }}</h2>
    <h2>{{ product.stock }}</h2>
    <img :src="product.image_url" alt="">
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product']
}
</script>

<style>

</style>
