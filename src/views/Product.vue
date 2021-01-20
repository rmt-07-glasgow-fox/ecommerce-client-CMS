<template>
  <div class="product">
    <div class="container">
      <div class="row"></div>
      <div class="row">
        <div class="col-3">
          <div class="card-deck">
            <product-card
             v-for="product in products"
             :key="product.id"
             :data="product"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios.js'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Product',
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    fetchProduct () {
      axios
        .get('/products')
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
