<template>
  <div class="container-fluid">
    <h1 class="mt-4">Products</h1>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary mb-3" @click="showAddForm">Add Product</button>
        <div class="card mb-3 w-50 p-3" v-if="showFormActive">
          <form @submit.prevent="addProduct">
            <div class="form-group">
              <label for="">Name: </label>
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Enter Name Product"
                required
              />
            </div>
            <div class="form-group">
              <label for="">Image: </label>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  accept=".jpg,.gif,.png"
                  id="inputGroupFile02"
                  @change="onFileChange"
                />
                <label class="custom-file-label" for="inputGroupFile02">{{ imageName }}</label>
              </div>
            </div>
            <div class="form-group">
              <label for="">Price: </label>
              <input
                type="number"
                min="0"
                class="form-control"
                v-model="price"
                placeholder="Enter Price Product"
                required
              />
            </div>
            <div class="form-group">
              <label for="">Stock: </label>
              <input
                type="number"
                min="0"
                class="form-control"
                v-model="stock"
                placeholder="Enter Stock Product"
                required
              />
            </div>
            <div class="form-group">
              <label for="inputCategories">Category:</label>
              <select id="inputCategories" class="form-control" v-model="CategoryId">
                <option selected value="0">-- Choose a category --</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                  category.name
                }}</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary mr-2">
              Create
            </button>
            <button type="button" @click="hideAddForm" class="btn btn-danger">
              Close
            </button>
          </form>
        </div>
        <table class="table table-striped" v-if="products.length > 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <product-item
              v-for="(product, index) in products"
              :key="index"
              :product="product"
              :index="index"
              :categories="categories"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'Products',
  components: { ProductItem },
  data() {
    return {
      showFormActive: false,
      name: '',
      price: null,
      stock: null,
      image: null,
      CategoryId: '0',
      imageName: 'Choose file image',
    };
  },
  methods: {
    showAddForm() {
      this.showFormActive = true;
    },
    hideAddForm() {
      this.showFormActive = false;
    },
    clearForm() {
      this.name = '';
      this.price = null;
      this.stock = null;
      this.image = null;
      this.CategoryId = '0';
      this.imageName = 'Choose file image';
    },
    onFileChange(event) {
      const f = event.target.files[0];
      this.image = f;
      this.imageName = f.name;
    },
    async addProduct() {
      try {
        const fd = new FormData();

        fd.append('image', this.image);
        fd.append('name', this.name);
        fd.append('price', Number(this.price));
        fd.append('stock', Number(this.stock));
        fd.append('CategoryId', Number(this.CategoryId));

        await this.$store.dispatch('addProduct', fd);
        this.clearForm();
        this.hideAddForm();
        this.$swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Product has been added',
        });
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    categories() {
      return this.$store.getters.categories;
    },
  },
  created() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchCategories');
  },
};
</script>

<style></style>
