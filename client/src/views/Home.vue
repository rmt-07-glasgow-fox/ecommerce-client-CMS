<template>
  <div class="home">
    <div class="row">
      <div class="col-2 left-nav" style="background-color:rgba(80, 81, 82,0.5)">
        <div id="nav">
          <div style="padding:16px">
            <h3>E-Shop-E</h3>
          </div>
          <div class="links">
            <router-link to="/">Home</router-link>
          </div>
          <div class="links">
            <router-link to="/addproduct">Add Product</router-link>
          </div>
          <div style="padding:16px">
            <button v-on:click="logout" class="btn btn-outline-danger">Logout</button>
          </div>
        </div>
      </div>
      <div class="col-10 overflow-scroll bg-light" style="height: 100vh;">
        <div class="overflow-scroll">
          <div class="container">
            <div>
              <h3 class="p-4">Product List</h3>
            </div>
            <div class="row">
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  methods: {
    getProducts () {
      this.$store.dispatch('fetchProduct')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
<style>
.left-nav{
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding-right: 0;
  padding-top: 12px;
  position: relative;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav .links {
  padding-top: 16px;
  padding-bottom: 16px;
}

#nav .links:hover:not(.active) {
  background-color: #555;
  color: white;
}
.content{
  position:relative;
}
</style>
