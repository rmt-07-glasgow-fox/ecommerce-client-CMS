<template>
  <div>
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div class="mb-1">
        <label for="name" class="col-form-label">Game Title</label>
        <input
          v-model="payload.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>
      <div class="mb-1">
        <label for="image_url" class="col-form-label">Image URL</label>
        <input
          v-model="payload.image_url"
          type="text"
          class="form-control"
          id="image_url"
        />
      </div>

      <div class="row mb-1">
        <div class="col-6">
          <label for="price" class="col-form-label">Price</label>
          <div class="input-group">
            <div class="input-group-text">Rp.</div>
            <input
              v-model="payload.price"
              type="number"
              class="form-control"
              id="price"
            />
          </div>
        </div>
        <div class="col-6">
          <label for="stock" class="col-form-label">Stock</label>
          <input
            v-model="payload.stock"
            type="number"
            class="form-control"
            id="stock"
          />
        </div>
      </div>
      <label for="category" class="col-form-label">Category</label>
      <select
        v-model="payload.CategoryId"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="">-- SELECT CATEGORY --</option>
        <option
          v-for="Category in Categories"
          :key="Category.id"
          :value="Category.id"
        >
          {{ Category.name }}
        </option>
      </select>

      <div class="mt-3 mb-3">
        <button
          type="submit"
          class="btn btn-sm btn-primary"
        >
          Add
        </button>
        <router-link to="/admin/product" style="text-decoration: none">
          <button
            type="button"
            style="margin-left: 36px"
            class="btn btn-sm btn-danger"
          >
            Cancel
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      payload: {
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
      this.$store.dispatch('addProduct', this.payload)
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  computed: {
    Categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>
