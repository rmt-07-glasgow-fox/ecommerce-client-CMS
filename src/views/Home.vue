<template>
  <div class="home">
    <h1>Home</h1>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Actions</th>
              </tr>

            </thead>
            <tbody>
              <Product
                v-for="(product, index) in products" :key="product.id"
                v-bind:product="product"
                v-bind:index="index"
              />
            </tbody>
          </table>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Product'

export default {
  name: 'Home',
  components: {
    Product
  },
  created () {
    this.$store.dispatch('fetchProducts')
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
      next({ name: 'FormLogin' })
    }
  }
}
</script>
