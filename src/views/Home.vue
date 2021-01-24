<template>
  <div>
    <Navbar/>
    <div class="container justify-content-center mt-5">
      <div class="row">
        <ProductCard v-for="product in products" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import ProductCard from '../components/ProductCard.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  methods: {

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
