<template>
  <form class="row mb-2">
    <div class="col-4 mb-4">
      <img v-if="product.image_url.length > 0" class="mx-auto" alt="Product image" :src="product.image_url" />
      <img v-else class="mx-auto" alt="Product image" src="../assets/empty-image.png" />
    </div>
    <div class="col-8 mb-4">
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="product-name">Name</label>
        <div class="col-sm-10">
          <input required v-model="product.name" class="form-control" name="product-name" placeholder="Product Name" type="text" value=""/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="product-description">Description</label>
        <div class="col-sm-10">
          <input v-model="product.description" class="form-control" name="product-description" placeholder="Product Description" type="text" value=""/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="product-category">Category</label>
        <div class="col-sm-10">
          <input required v-model="product.category" class="form-control" name="product-category" placeholder="Product Category" type="text" value=""/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="product-image">Image</label>
        <div class="col-sm-10">
          <input v-model="product.image_url" class="form-control" name="product-image" placeholder="Product Image URL" type="text" value=""/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="product-price">Price</label>
        <div class="col-sm-10">
          <input required v-model="product.price" class="form-control" name="product-price" placeholder="0" type="number" value=""/>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label" for="product-stock">Stock</label>
        <div class="col-sm-10">
          <input required v-model="product.stock" class="form-control" name="product-stock" placeholder="0" type="number" value=""/>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductDetails',
  data () {
    return {

    }
  },
  computed: mapState([
    'product'
  ])
}
</script>

<style scoped>
label {
  text-align: left;
}

img {
  width: 250px;
}
</style>
