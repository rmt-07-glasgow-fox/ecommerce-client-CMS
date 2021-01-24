<template>
  <div class="col" style="width: 17rem;">
    <div class="card shadow rounded">
      <img :src="product.image_url || defaultImageUrl" class="card-img-top" alt="Product image">
      <h5 class="card-header">{{ product.name }}</h5>
      <h6 class="card-header">Price: {{ product.price }}</h6>
      <h6 class="card-footer my-0">Stock: {{ product.stock }}</h6>
      <div class="card-footer text-center">
        <button @click="deleteProduct(product.id)" type="button" class="btn btn-danger btn-sm shadow rounded m-1">Remove</button>
        <button @click="getProduct(product.id)" type="button" class="btn btn-primary btn-sm shadow rounded m-1">Update</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Product',
  props: ['product'],
  data () {
    return {
      defaultImageUrl: 'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg',
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMTQ1NTUxN30.KdYbSEvQDVT0A8-nuz-UxmZR4VcCOXec59-b6mDW6zg'
    }
  },
  methods: {
    getProduct (idProduct) {
      this.$router.push('products/' + idProduct)
      // this.$router.push({ name: 'ProductUpdate', params: { id: this.product.id } })
    },
    deleteProduct (idProduct) {
      this.$store.dispatch('deleteProduct', idProduct)
    }
  }
}
</script>

<style>
  .card-img-top {
    max-height: 10rem;
    object-fit: cover;
    min-height: 10rem;
  }
</style>
