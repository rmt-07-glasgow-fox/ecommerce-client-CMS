<template>
  <div class="container">
    <Navbar></Navbar>
    <h1 class="mb-5 mt-3 white--text">Products</h1>
    <DialogAdd></DialogAdd>
    <v-row>
      <v-col
       v-for="product in products"
       :key="product.id"
       cols="3"
      >
      <Dashboard :products="product"></Dashboard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import DialogAdd from '../components/DialogAdd'
export default {
  name: 'Home',
  data: () => ({
    dialog: false
  }),
  components: {
    Dashboard,
    DialogAdd,
    Navbar
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>
<style>
  h1{
    text-align: center;
  }
</style>
