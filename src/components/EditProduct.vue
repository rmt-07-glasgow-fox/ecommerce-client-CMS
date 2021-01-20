<template>
  <div class="row mb-3 mt-3">
    <div class="col">
      <h1 class="mb-3">Edit Product</h1>
      <form @submit.prevent="handleEditProduct">
        <div class="form-group mt-1 row">
          <label for="input-name" class="col-sm-2 col-2 col-form-label">Name</label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="productById.name" class="form-control" id="input-name" placeholder="Product's name">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-image" class="col-sm-2 col-2 col-form-label">Image Url</label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="productById.image_url" class="form-control" id="input-image" placeholder="Product's image url">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-price" class="col-sm-2 col-2 col-form-label">Price</label>
          <div class="col-sm-10 col-10">
            <input type="number" v-model="productById.price" class="form-control" id="input-price" placeholder="Product's price">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-stock" class="col-sm-2 col-2 col-form-label">Stock</label>
          <div class="col-sm-10 col-10">
            <input type="number" v-model="productById.stock" class="form-control" id="input-stock" placeholder="Product's stock">
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return { }
  },
  props: [],
  methods: {
    handleEditProduct () {
      this.$store.dispatch('handleUpdateProductById', {
        id: this.$route.params.id,
        name: this.productById.name,
        image_url: this.productById.image_url,
        price: this.productById.price,
        stock: this.productById.stock
      })
    },
    getDataById () {
      this.$store.dispatch('getDataById', this.$route.params.id)
    }
  },
  created () {
    this.getDataById()
  },
  computed: {
    productById () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
