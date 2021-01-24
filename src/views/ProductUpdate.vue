<template>
  <div class="update-product">
    <h1>Update Product</h1>
    <div class="container justify-content-center p-4 shadow rounded" style="background-color: lightslategray;">
      <div class="container p-3 bg-light shadow rounded" style="max-height: 40rem; max-width: 40rem;">
        <form @submit.prevent="updateProduct">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="productName" v-model="selectProduct.name" aria-describedby="productNameHelp">
            <label for="productName">Product name</label>
            <div id="productNameHelp" class="form-text">e.g. : Converse Black Mamba, Adiddas AllStar</div>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="imageUrl" v-model="selectProduct.image_url" aria-describedby="imageUrlHelp">
            <label for="imageUrl">Image URL</label>
            <div id="imageUrlHelp" class="form-text">e.g. : https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg</div>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="productPrice" v-model="selectProduct.price" aria-describedby="productPriceHelp">
            <label for="productPrice">Product Price</label>
            <div id="productPriceHelp" class="form-text">e.g. : 299999</div>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="productStock" v-model="selectProduct.stock" aria-describedby="productStockHelp">
            <label for="productStock">Product Stock</label>
            <div id="productStockHelp" class="form-text">e.g. : 5, 10, 13</div>
          </div>
          <div class="row">
            <button @click="backToProducts" type="reset" class="btn btn-danger col m-1">Cancel</button>
            <button type="submit" class="btn btn-primary col m-1">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductUpdate',
  data () {
    return {}
  },
  methods: {
    fetchProduct () {
      const { id } = this.$route.params
      this.$store.dispatch('fetchProduct', id)
    },
    updateProduct () {
      const { id } = this.$route.params
      const payload = {
        id,
        name: this.selectProduct.name,
        image_url: this.selectProduct.image_url,
        price: this.selectProduct.price,
        stock: this.selectProduct.stock
      }
      this.$store.dispatch('updateProduct', payload)
    },
    backToProducts () {
      this.$router.push('/products')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    selectProduct () {
      return this.$store.state.selectProduct
    }
  }
}
</script>

<style scoped>
.update-product form {
  text-align: left;
}
</style>>
