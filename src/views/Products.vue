<template>
  <div class="products">
    <h1>This is yours</h1>
    <div class="container">
      <div class="row">
        <ProductList
          v-for="productlist in productlists"
          :key="productlist.id"
          :productlist="productlist"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'
import ProductList from '../components/ProductList'

export default {
  name: 'Productlist',
  components: {
    ProductList
  },
  data () {
    return {
      productlists: []
    }
  },
  methods: {
    fetchProduct () {
      axios
        .get('/products', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          this.productlists = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>
