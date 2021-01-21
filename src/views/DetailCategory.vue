<template>
  <div class="container mt-3">
    <div class="row text-center">
      <div class="col-lg-12">
        <h1>Edit Category</h1>
      </div>
      <div class="col-lg-6">
        <div class="card shadow mb-5">
          <div class="card-body">
            <form @submit.prevent="editCategory">
              <div class="form-group">
                <label>Category Name</label>
                <input type="text" placeholder="Product Name" class="form-control" v-model="category.name">
              </div>
              <div class="form-group">
                <label>Category Image Icon</label>
                <input type="text" placeholder="Category Image Icon (e.g. camera)" class="form-control" v-model="category.image" aria-describedby="fonthelp">
                <small id="fonthelp" class="form-text text-muted"><a href="https://fontawesome.com/icons?d=gallery&m=free" target="blank" class="linkhelp">Look Fontawesome For Reference</a></small>
                <hr>
                <p>Icon preview: <i :class="faClass"></i></p>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <a class="btn btn-danger ml-3" @click="deleteCategory">Delete</a>
              <a class="btn btn-warning ml-3 text-white" @click="back">Cancel</a>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card shadow mb-5 product">
          <h3 class="mt-3">List of Product in This Category</h3>
          <div class="card-body overflow-auto">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                v-for="product in category.Products"
                :key="product.id"
                >
                  <td class="align-middle">{{ product.id }}</td>
                  <td class="align-middle">{{ product.name }}</td>
                  <td class="align-middle">{{ product.stock }}</td>
                  <button class="btn btn-danger ml-3" @click="deleteProduct(product.id)">Delete</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCategory',
  methods: {
    detailCategoryById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchCategoryById', id)
    },
    editCategory () {
      const id = this.$route.params.id
      this.$store.dispatch('editCategory', { id, name: this.category.name, image: this.category.image })
    },
    deleteCategory () {
      const id = this.category.id
      this.$store.dispatch('deleteCategory', id)
    },
    back () {
      this.$router.go(-1)
    },
    deleteProduct (idProduct) {
      this.$store.dispatch('deleteProductInCategory', { idProduct, idCategory: this.category.id })
    }
  },
  computed: {
    category () {
      return this.$store.state.categoryById
    },
    faClass () {
      return 'fas fa-' + this.category.image
    }
  },
  created () {
    this.detailCategoryById()
  }
}
</script>

<style>
  .product {
    max-height: 50vh;
  }
</style>
