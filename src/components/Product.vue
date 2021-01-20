<template>
  <div class="container">
    <div class="my-3 title">Product</div>
    <div class="btn btn-dark btn-sm mb-5" @click="addProduct"><i class="fas fa-plus"></i> Add Product</div>
      <div>
        <product-card v-for="product in products" :key="product.id" :product="product" />
      </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  components: { ProductCard },
  name: 'Product',
  methods: {
    showFormAdd () {
      this.$router.push('/add')
    },
    async addProduct () {
      const { value: product } = await Swal.fire({
        title: 'Add Product',
        html: `
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-briefcase"></i></label>
          <div class="col-sm-11">
            <input type="text" class="form-control" id="name" placeholder="name">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-donate"></i></label>
          <div class="col-sm-11">
            <input type="number" class="form-control" id="price" placeholder="price">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fab fa-dropbox"></i></label>
          <div class="col-sm-11">
            <input type="number" class="form-control" id="stock" placeholder="stock">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-1 col-form-label"><i class="fas fa-toggle-on"></i></label>
          <div class="col-sm-11">
            <select class="form-control" id="CategoryId">
              <option value="" selected>select category</option>
              ${this.categories.map(e => '<option value="' + e.id + '">' + e.name + '</option>')}
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-1 col-form-label"><i class="fas fa-image"></i></label>
          <div class="col-sm-11">
            <textarea type="number" class="form-control" id="image_url" rows="5" placeholder="image url"></textarea>
          </div>
        </div>`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('name').value,
            document.getElementById('price').value,
            document.getElementById('stock').value,
            document.getElementById('image_url').value,
            document.getElementById('CategoryId').value
          ]
        }
      })

      if (product) {
        const [name, price, stock, imageUrl, CategoryId] = product
        const payload = {
          name,
          price,
          stock,
          imageUrl,
          CategoryId
        }
        this.$store.dispatch('addProduct', payload)
      }
    }
  },
  computed: {
    ...mapState([
      'products',
      'categories'
    ])
  }
}
</script>

<style scoped>
  .title{
    font-size: 2em;
    font-weight: 1000;
  }
</style>
