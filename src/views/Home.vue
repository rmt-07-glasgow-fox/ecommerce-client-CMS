<template>
  <div class="home">
    <h1>Ini Home / Dashboard</h1>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12">
          <router-link to="/products/new">Add Product</router-link>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">No</th>
                <th scope="col">Name</th>
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
                v-on:fetchProducts="fetchProducts"
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
import axios from '../api/axios'
import Product from '../components/Product'

export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  components: {
    Product
  },
  methods: {
    fetchProducts () {
      axios({
        method: 'get',
        url: 'products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, 'Ini products')
          this.products = data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
