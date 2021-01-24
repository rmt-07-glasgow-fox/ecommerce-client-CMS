<template>
  <div class="product">
    <h1>Products Dashboard</h1>
    <!-- TODO: Button Add / Create -->
    <div class="container-sm shadow rounded" style="background-color: lightslategray;">
        <div class="row rounded">
          <button @click="addProduct" type="button" class="btn btn-primary btn-lg btn-block rounded">Add new product</button>
        </div>
    </div>
    <!-- TODO: Halaman CardList -->
    <div class="container-xl shadow rounded my-5">
      <div class="row row-cols-5 g-4 justify-content-center pb-4 rounded" style="min-height: 50vh; background-color: lightslategray;">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'Products',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    addProduct () {
      this.$router.push('/productadd')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    Product
  }
}
</script>

<style>
.container-xl {
  text-align: left;;
}
/* Button Style
.btn-primary {
  background-color: Blue !important;
  border-color: Blue !important;
}
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited,
.btn-primary:focus {
  background-color: DarkBlue !important;
  border-color: DarkBlue !important;
} */
</style>
