<template>
  <div class="vh-100 vw-100 bg-info">
    <div class="container text-center">
      <div class="card">
        <form @submit.prevent="addNewProduct">
          <h4>New Product</h4>
          <div class="form-group">
            <label>Name</label>
            <input
              v-model="inputNewProduct.name"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input
              v-model="inputNewProduct.image_url"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="inputNewProduct.price"
              type="number"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Stock</label>
            <input
              v-model="inputNewProduct.stock"
              type="number"
              class="form-control"
              required
            />
          </div>
          <div class="input-group mb-3 my-5">
            <label class="input-group-text">Brand</label>
            <select
              v-model="inputNewProduct.BrandId"
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
  data () {
    return {
      inputNewProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        BrandId: ''
      }
    }
  },
  methods: {
    addNewProduct () {
      console.log('>>> new product ', this.inputNewProduct)
      const { name, image_url, price, stock, BrandId } = this.inputNewProduct
      const newProduct = {
        name: name,
        image_url: image_url,
        price: +price,
        stock: +stock,
        BrandId: +BrandId
      }
      console.log('>>> reformatted newProduct : ', newProduct)

      this.$store.dispatch('addProduct', newProduct)
    },
    cancel(){
      this.$router.push('/products')
    }
  },
  created () {
    this.$store.dispatch('getAllProducts')
    this.$store.dispatch('getAllBrands')
  },
  computed: {
    ...mapState(['brands'])
  }
}
</script>
