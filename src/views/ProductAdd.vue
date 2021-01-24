<template>
  <div class="add-product">
    <h1>Add new Product</h1>
    <div class="container justify-content-center p-4 shadow rounded" style="background-color: lightslategray;">
      <div class="container p-3 bg-light shadow rounded" style="max-height: 40rem; max-width: 40rem;">
        <form @submit.prevent="addProduct">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="productName" v-model="payload.name" aria-describedby="productNameHelp">
            <label for="productName">Product name</label>
            <div id="productNameHelp" class="form-text">e.g. : Converse Black Mamba, Adiddas AllStar</div>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="imageUrl" v-model="payload.image_url" aria-describedby="imageUrlHelp">
            <label for="imageUrl">Image URL</label>
            <div id="imageUrlHelp" class="form-text">e.g. : https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg</div>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="productPrice" v-model="payload.price" aria-describedby="productPriceHelp">
            <label for="productPrice">Product Price</label>
            <div id="productPriceHelp" class="form-text">e.g. : 299999</div>
          </div>
          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="productStock" v-model="payload.stock" aria-describedby="productStockHelp">
            <label for="productStock">Product Stock</label>
            <div id="productStockHelp" class="form-text">e.g. : 5, 10, 13</div>
          </div>
          <div class="row">
            <button @click.prevent="backToProducts" type="reset" class="btn btn-danger col m-1">Cancel</button>
            <button type="submit" class="btn btn-primary col m-1">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductAdd',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.payload)
    },
    backToProducts () {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
.add-product form {
  text-align: left;
}
</style>>
