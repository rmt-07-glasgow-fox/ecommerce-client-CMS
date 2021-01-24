<template>
  <div class="Dashboard">
    <div class="row" style="width:98%; margin-left:1%">
      <div class="col-12 bg-light rounded" style="margin-top: 20px; margin-bottom: 20px; padding: 30px;">
        <div class="row">
          <div class="col-4 offset-4">
            <h1 v-if="currentPage == 'productList'">Products</h1>
            <h1 v-if="currentPage == 'addForm'">Add Product</h1>
            <h1 v-if="currentPage == 'editForm'">Edit Product</h1>
          </div>
          <div class="col-4" style="display: flex; justify-content: flex-end">
            <button v-if="currentPage == 'productList'" @click.prevent="changePage('addForm')" class="btn btn-dark" style="padding-top: 8px">Add Product</button>
            <button v-if="currentPage !== 'productList'" @click.prevent="changePage('productList')" class="btn btn-dark" style="padding-top: 8px">Back</button>
          </div>
        </div>
        <br>
        <div v-if="currentPage == 'productList'" class="products">
          <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
          :changePage="changePage"
          />
        </div>
        <div v-if="currentPage == 'addForm'">
          <AddForm :changePage="changePage"/>
        </div>
        <div v-if="currentPage == 'editForm'">
          <EditForm :changePage="changePage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Products'
import AddForm from '../components/AddForm'
import EditForm from '../components/EditForm'

export default {
  name: 'Dashboard',
  components: {
    Product,
    AddForm,
    EditForm
  },
  methods: {
    changePage (page) {
      this.$store.dispatch('changePage', page)
    }
  },
  computed: {
    currentPage () {
      return this.$store.state.currentPage
    },
    products () {
      return this.$store.state.products
    }
  },
  created () {
    return this.$store.dispatch('fetchProducts')
  }
}
</script>
