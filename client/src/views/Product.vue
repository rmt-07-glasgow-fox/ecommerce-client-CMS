<template>
<div class="class container">
  <div class="product">
    <h1>List of Product</h1>
    <!-- Product Card -->
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"/>
    </div>
  </div>
</div>
</template>

<script>
import axios from '../api/axios'
import ProductCard from '../components/ProductCard.vue'

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
        .get('/product')
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
