<template>
  <div class="container mt-3">
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <h1 class="text-dark">Edit Product</h1>
        <div class="card shadow mb-5">
          <div class="card-body">
            <form @submit.prevent="editProduct">
              <div class="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Product Name" class="form-control" v-model="productById.name">
              </div>
              <div class="form-group">
                <label>Product Price</label>
                <input type="number" placeholder="Product Price" class="form-control" v-model="productById.price">
              </div>
              <div class="form-group">
                <label>Product Stock</label>
                <input type="number" placeholder="Product Stock" class="form-control" v-model="productById.stock">
              </div>
              <div class="form-group">
                <label>Product Category</label>
                <select class="form-control"
                  v-model="productById.CategoryId"
                  >
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>Product Image</label>
                <input type="text" placeholder="Product Image" class="form-control" v-model="productById.image_url">
              </div>
              <button type="submit" class="btn btn-primary">Confirm</button>
              <a class="btn btn-danger ml-3" @click="deleteProduct">Delete</a>
              <a class="btn btn-warning ml-3 text-white" @click="back">Cancel</a>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailProduct',
  computed: {
    productById () {
      return this.$store.state.productById
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
    },
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.productById.name,
        price: this.productById.price,
        stock: this.productById.stock,
        imageurl: this.productById.image_url,
        CategoryId: this.productById.CategoryId
      }
      this.$store.dispatch('editProduct', payload)
    },
    deleteProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('deleteProduct', id)
    },
    back () {
      this.$router.go(-1)
    }
  },
  created () {
    this.fetchProductById()
  }

}
</script>

<style>

</style>
