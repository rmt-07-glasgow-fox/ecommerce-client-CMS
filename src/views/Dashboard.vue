<template>
  <div class="container">
    <NavbarDashboard></NavbarDashboard>
    <table class="table table-light">
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>name</th>
          <th>stock</th>
          <th>price</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
          <ItemCard v-for="product in products" :key="product.id" :product='product' />
      </tbody>
    </table>
  </div>

</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import ItemCard from '../components/ItemCard'
export default {
  name: 'Dashboard',
  components: {
    NavbarDashboard,
    ItemCard
  },
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    goToAddProduct () {
      this.$router.push('/createProduct')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
