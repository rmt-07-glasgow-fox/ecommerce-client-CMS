<template>
  <div id="products">
    <navbar></navbar>
      <div class="container w-screen my-20 mx-auto">
        <div class="flex w flex-wrap justify-items-center justify-center">
          <product-card v-for="product in products"
          :key="product.id"
          :product="product"></product-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Products',
  components: {
    ProductCard,
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next('/')
    }
  }
}
</script>
