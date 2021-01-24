<template>
  <div>
      <h1>Add Product</h1>
      <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <form class="w-50" @submit.prevent="addProduct">
              <div class="form-group text-left">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Product's name" v-model="product.name">
              </div>
              <div class="form-group text-left">
                <label for="url">Image Url:</label>
                <input type="url" class="form-control" id="url" placeholder="Image url" v-model="product.image_url">
              </div>
              <div class="form-group text-left">
                <label for="price">Price:</label>
                <input type="number" class="form-control" id="price" placeholder="0" v-model="product.price">
              </div>
              <div class="form-group text-left">
                <label for="stock">Stock:</label>
                <input type="number" class="form-control" id="stock" placeholder="0" v-model="product.stock">
              </div>
              <div class="w-100 d-flex justify-content-start">
                <input type="submit" class="btn btn-success" value="Save">
              </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
        .then(({ data }) => {
          this.$router.push('/')
          this.$store.dispatch('sweetSuccess', 'Product added')
          this.$store.dispatch('getProducts')
            .catch(err => {
              const message = err.response.data.message
              this.$store.dispatch('sweetError', message)
            })
        })
        .catch(err => {
          const message = err.response.data.message
          this.$store.dispatch('sweetError', message)
        })
    }
  }
}
</script>

<style>

</style>
