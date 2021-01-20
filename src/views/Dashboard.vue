<template>
<div class="container">
  <h1>Welcome to Dashboard</h1>
      <div>
        <button class="btn btn-success btn-lg" @click="addProduct"> Add Product </button>
      </div><br>
  <div class="row">
    <div class="col-md-2 d-flex">
    </div>
    <div class="row">
      <ListProducts
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      <!-- <AddProduct
      /> -->
    </div>
  </div>
</div>
</template>

<script>
import ListProducts from '../components/listProducts'
// import AddProduct from '../components/AddProduct'
export default {
  name: 'Dashboard',
  components: {
    ListProducts
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    addProduct () {
      this.$router.push('/add')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}

</style>
