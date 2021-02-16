<template>
  <div class="pt-5">
    <b-form>
      <b-form-group>
        <label class="float-left" for="product-name">
          <strong>Product Name</strong>
        </label>
        <b-form-input
          type="text"
          id="product-name"
          autocomplete="off"
          v-model="product.name"
          placeholder="What are you selling?">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <label class="float-left">
          <strong>Image URL</strong>
        </label>
        <b-form-input
          type="text"
          autocomplete="off"
          v-model="product.image_url"
          placeholder="https://google.com">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <label class="float-left" for="product-category">
          <strong>Category</strong>
        </label>
        <select class="form-control"
          v-model="product.categoryId">
          <option selected disabled value="">--Select Category--</option>
          <i class="fas fa-trash ml-3"></i>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id">{{ category.categoryName }}</option>
        </select>
      </b-form-group>

      <b-form-group class="float-left w-50 mr-3">
        <label class="float-left" for="product-price">
          <strong>Price</strong>
        </label>
        <b-form-input
          min="500"
          type="number"
          autocomplete="off"
          v-model="product.price"
          placeholder="500">
        </b-form-input>
      </b-form-group>

      <b-form-group>
        <label class="float-left" for="product-stock">
          <strong>Stock</strong>
        </label>
        <b-form-input
          min="0"
          type="number"
          autocomplete="off"
          class="form-control"
          v-model="product.stock"
          placeholder="1"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group class="w-100">
        <label class="float-left" for="product-description">
          <strong>Description</strong>
        </label>
        <textarea style="height:200px"
          class="form-control"
          placeholder="Describe your product..."
          autocomplete="off"
          v-model="product.description">
        </textarea>
      </b-form-group>

      <button class="btn btn-success w-100 mb-3"
        v-if="state === 'editPage'"
        @click.prevent="updateProduct('updateProduct')">Update
      </button>

      <button class="btn btn-primary w-100 mb-3"
        @click.prevent="updateProduct('addNewProduct')"
        v-else>Add
      </button>

      <router-link
        :to="'/products'"
        class="btn btn-danger w-100">
        Cancel
      </router-link>
    </b-form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'FormPage',
  methods: {
    updateProduct (params) {
      if (!this.product.name || !this.product.categoryId || !this.product.price || !this.product.stock) {
        this.errorMessage('Name, category, price, and stock must be filled')
      } else if (this.product.price < 500) {
        this.errorMessage('Product price at least IDR 500')
      } else if (this.product.stock < 0) {
        this.errorMessage('Stock cannot be negative')
      } else {
        this.$store.dispatch(params, this.product)
      }
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    errorMessage (message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message
      })
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchCategories()
  },
  props: ['product', 'state']
}
</script>

<style scoped>
</style>
