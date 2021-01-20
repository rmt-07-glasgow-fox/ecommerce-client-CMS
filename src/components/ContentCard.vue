<template>
  <div class='container'>
    <div class='row'>
      <h1>Dashboard</h1>
    </div>
    <div class='row'>
      <div class='col-3 pl-0 pr-0 mb-4' v-for='product in products' :key='product.id'>
        <div class='card'>
          <img :src="`${product.image_url}`" class="card-img-top img-fluid" alt="image not found" @click='productDetail(product.id)'>
          <div class='card-header'>
            <p class='text-weight-bold'>{{ product.name }}</p>
          </div>
          <div class="card-body">
            <p class="card-text">Stock: {{ product.stock }}</p>
            <p class="card-text">Price: {{ formatPrice(product.price) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  methods: {
    formatPrice (price) {
      return 'IDR ' + price.toLocaleString('id')
    },
    productDetail (id) {
      this.$router.push({
        name: 'ProductDetail',
        params: {
          id
        }
      })
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>
