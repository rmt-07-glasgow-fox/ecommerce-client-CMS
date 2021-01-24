<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3 mt-5">
          <i class="text-white fa fa-cart-plus"></i>
          <h1>Add New Product</h1>
        </div>
        <div class="col-6">
          <div class="card bg-content mt-5">
            <form @submit="createProduct" id="formlogin" class="container card-body mt-4 mr-4 mb-4">
              <div class="form-group">
                <label for="productname"><h3>Name :</h3></label>
                <input type="text" class="form-control mb-3" placeholder="The Product's Name Here" v-model="productData.name"/>
              </div>
              <div class="form-group">
                <label for="productname"><h3>Product Image :</h3></label>
                <input type="text" class="form-control mb-3 input-text" placeholder="The Product's Image Url Here" v-model="productData.image_url"/>
              </div>
              <div class="form-group">
                <label for="productname"><h3>Price</h3></label>
                <input type="number" class="form-control mb-3" placeholder="The Product's Price Here" v-model="productData.price"/>
              </div>
              <div class="form-group">
                <label for="productname"><h3>Stock</h3></label>
                <input type="number" class="form-control mb-3" placeholder="The Product's Stock Here" v-model="productData.stock"/>
              </div>
              <button type="submit" class="shadow btn btn-success mb-3">Create Product</button>
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
export default {
  name: 'CreateProduct',
  data () {
    return {
      productData: {
        name: '',
        image_url: '',
        stock: '',
        price: ''
      }
    }
  },
  methods: {
    backButton () {
      this.$router.push('/dashboard')
    },
    createProduct () {
      this.$store.dispatch('createNewProduct', this.productData)
    }
  }
}
</script>

<style>
</style>
