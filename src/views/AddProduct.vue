<template>
  <div class="container mt-3">
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <h1 class="text-dark">Add a New Product</h1>
        <div class="card shadow mb-5">
          <div class="card-body">
            <form @submit.prevent="addProduct">
              <div class="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Product Name" class="form-control" v-model="add.name">
              </div>
              <div class="form-group">
                <label>Product Price</label>
                <input type="number" placeholder="Product Price" class="form-control" v-model="add.price">
              </div>
              <div class="form-group">
                <label>Product Stock</label>
                <input type="number" placeholder="Product Stock" class="form-control" v-model="add.stock">
              </div>
              <div class="form-group">
                <label>Product Category</label>
                <select class="form-control"
                  v-model="add.CategoryId">
                  <option value="" disabled>Select Category</option>
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
                <input type="text" placeholder="Product Image" class="form-control" v-model="add.image_url">
              </div>
              <button type="submit" class="btn btn-primary">Add Product</button>
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
  name: 'AddProduct',
  data () {
    return {
      add: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        CategoryId: ''
      }
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.add.name,
        image_url: this.add.image_url,
        price: this.add.price,
        stock: this.add.stock,
        CategoryId: this.add.CategoryId
      }

      this.$store.dispatch('addProduct', payload)
    },
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
