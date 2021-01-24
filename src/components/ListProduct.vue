<template>
<div class="ListProduct">
<div class="container">
  <div class="columns">
    <div class="column is-one-third">
      <p>List</p>
      <p>Add</p>
    </div>
  <div class="column">
  <div class="table-container">
  <table class="table">
    <!-- Your table content -->
    <thead>
      <!-- <th>No.</th> -->
      <th>Product Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Image</th>
      <th>Action</th>
    </thead>
    <tbody>
       <!-- <tr v-for="(product, index) in products" :key="product.id" :product="product">
        <th scope="row" class="align-middle">{{ index+1 }}</th>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.stock }}</td>
        <td>
          <img class="product-image" :src="product.imageUrl" alt="gambar" srcset="">
        </td>
        <td>
          <button @click.prevent="editPage(product.id)" class="button is-warning mr-2">edit</button>
          <button @click.prevent="deleteProduct" class="button is-danger">delete</button>
        </td>
      </tr> -->
      <!-- <Product/> -->
      <Product v-for="(product) in products" :key="product.id" :product="product"/>
    </tbody>
  </table>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
// import { mapState } from 'vuex'
import Product from '../components/Product'
export default {
  // props: ['product'],
  components: {
    Product
  },
  name: 'ListProduct',
  // components: {Product },
  data () {
    return {

    }
  },
  methods: {
    fetch () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetch()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
