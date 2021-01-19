<template>
  <div class="container d-flex justify-content-center">
    <div class="card col-7 mt-3 p-5">
      <div class="title mb-3">Add Product</div>
      <form @submit.prevent="addProduct">
        <div class="mb-3">
          <input type="text" class="form-control" v-model="name" placeholder="name">
        </div>
        <div class="mb-3">
          <input type="number" class="form-control" v-model="price" placeholder="price">
        </div>
        <div class="mb-3">
          <input type="number" class="form-control" v-model="stock" placeholder="stock">
        </div>
        <div class="mb-3">
          <textarea class="form-control" v-model="imageUrl" placeholder="image_url"></textarea>
        </div>
        <div>
          <button type="submit" class="btn btn-dark">Submit</button>
          <a class="btn btn-danger ml-2" @click="navigateToProduct">Cancel</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductAdd',
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      imageUrl: ''
    }
  },
  methods: {
    navigateToProduct () {
      this.$router.push('/')
    },
    addProduct () {
      const { name, price, stock, imageUrl } = this
      this.$emit('addProduct', name, price, stock, imageUrl)
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 2em;
    font-weight: 1000;
  }
</style>
