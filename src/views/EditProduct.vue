<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3 mt-5">
          <i class="w3-jumbo text-white fa fa-cart-arrow-down"></i>
          <h1>Edit Product :</h1>
          <h1>{{ productName }}</h1>
          <div class="card-header border-0">
            <img class="gambar-product-edit" :src="productImage" alt="Gambar Product">
          </div>
        </div>
        <div class="col-6">
          <div class="card bg-content mt-5">
            <form id="formlogin" @submit="editProductById" class="container card-body mt-4 mr-4 mb-4">
              <div class="form-group">
                <label for="productname"><h3>Name :</h3></label>
                <input type="text" class="form-control mb-3" v-model="editProduct.name"/>
              </div>
              <div class="form-group">
                <label for="productname"><h3>Product Image :</h3></label>
                <input type="text" class="form-control mb-3 input-text" v-model="editProduct.image_url"/>
              </div>
              <div class="form-group">
                <label for="productname"><h3>Price</h3></label>
                <input type="number" class="form-control mb-3" v-model="editProduct.price"/>
              </div>
              <div class="form-group">
                <label for="productname"><h3>Stock</h3></label>
                <input type="number" class="form-control mb-3" v-model="editProduct.stock"/>
              </div>
              <button type="submit" class="shadow btn btn-success mb-3">Edit Product</button>
              <br>
              <button @click.prevent="backButton" class="shadow btn btn-danger mb-3">Back</button>
              <br>
              <small class="form-text text-danger text-left mt-1 mb-3">*All Field Must Be Filled</small><br>
            </form>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'
export default {
  name: 'EditProduct',
  data () {
    return {
      id: this.$route.params.id,
      editProduct: {
        name: '',
        image_url: '',
        stock: '',
        price: ''
      },
      productName: '',
      productImage: ''
    }
  },
  computed: {
  },
  methods: {
    backButton () {
      this.$router.push('/dashboard')
    },
    fetchProductById () {
      axios({
        url: `/products/${this.id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          this.productName = data.name
          this.productImage = data.image_url
          this.editProduct.name = data.name
          this.editProduct.image_url = data.image_url
          this.editProduct.stock = data.stock
          this.editProduct.price = data.price
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editProductById () {
      const data = {
        id: this.id,
        product: this.editProduct
      }
      this.$store.dispatch('editProductById', data)
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>
</style>
