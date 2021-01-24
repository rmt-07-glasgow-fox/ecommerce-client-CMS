<template>
  <div class="vh-100 vw-100 bg-info">
    <div class="container text-center">
      <div class="card">
        <form @submit.prevent="editProducts">
          <h4>Edit Product</h4>
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="productsDetail.name"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input
              v-model="productsDetail.image_url"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="productsDetail.price"
              type="number"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Stock</label>
            <input
              v-model="productsDetail.stock"
              type="number"
              class="form-control"
              required
            />
          </div>
          <div class="input-group mb-3 my-5">
            <label class="input-group-text">Brand</label>
            <select
              v-model="productsDetail.BrandId"
              class="form-select"
              required
            >
              <option v-for="brand in brands" :value="brand.id" :key="brand.id">
                {{ brand.name }}
              </option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button @click="cancel" class="btn btn-danger">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    async editProducts () {
      // console.log('>>> edited product', this.productsDetail)
      const { id, name, image_url, price, stock, BrandId } = this.productsDetail
      const editedProduct = {
        id: id,
        name: name,
        image_url: image_url,
        price: +price,
        stock: +stock,
        BrandId: +BrandId
      }

      // console.log('>>> formatted edit product', editedProduct)
      await this.$store.dispatch('editProduct', editedProduct)
      this.$router.push('/products')
    },
    cancel () {
      this.$router.push('/products')
    }
  },
  created () {
    // console.log('>>> params router', this.$route.params)
    const { id } = this.$route.params
    this.$store.dispatch('getProductById', id)
    this.$store.dispatch('getAllBrands')
  },
  computed: {
    ...mapState(['productsDetail', 'brands'])
  }
}
</script>
