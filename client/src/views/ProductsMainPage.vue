<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-4 bg-light mr-3">
        <div class=" card-header mt-1">
          <h4>Product Stopped or Out of Stock</h4>
        </div>
        <div class="card-body">
          <table class="table table-hover table-sm">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              <StopProduct
                v-for='product in products'
                :key='product.id'
                :product='product'/>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-7">
        <div class="card-header">
          <h4>List Product</h4>
        </div>
        <div class="card-body overflow-auto">
          <div class="row d-flex justify-content-center" v-if="!isAdd">
            <CardProduct
              v-for='product in products'
              :key='product.id'
              :product='product'/>
          </div>
          <div v-if="isAdd">
            <AddForm/>
          </div>
        </div>
        <div class="card-footer bg-light">
          <div v-if="!isAdd">
            <button class="btn btn-secondary" @click="changeAdd(true)"><i class="fas fa-plus"></i>  Add Product</button>
          </div>
          <div v-if="isAdd">
            <button class="btn btn-warning" @click="changeAdd(false)">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardProduct from '../components/CardProduct.vue'
import AddForm from '../components/AddForm'
import StopProduct from '../components/StopProduct'

export default {
  name: 'ProductsMainPage',
  components: {
    CardProduct,
    AddForm,
    StopProduct
  },
  methods: {
    listProducts () {
      this.$store.dispatch('listProducts')
    },
    changeAdd (input) {
      this.$store.commit('changeAdd', input)
    }
  },
  computed: {
    ...mapState([
      'products',
      'isAdd'
    ])
  },
  created () {
    this.listProducts()
  }
}
</script>

<style scoped>
.overflow-auto {
  height:450px
}
</style>
