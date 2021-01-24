<template>
  <div v-if="(this.user_status === 'admin')  || (this.user_status === 'guest')">
    <div class="d-flex">
      <table class="table table-striped table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            <ProductList
            v-for="(item,index) in products" :key="index"
            :item="item"></ProductList>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      user_status: localStorage.getItem('user_status')
    }
  },
  components: {
    ProductList
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style>

</style>>
