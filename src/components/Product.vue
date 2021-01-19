<template>
  <div class="container">
    <div class="my-3 title">Product</div>
    <div class="btn btn-dark btn-sm" @click="showFormAdd"><i class="fas fa-plus"></i> Add Product</div>
      <div v-for="product in products" :key="product.id">
        <div class="row">
          <div class="col-3 d-flex justify-content-center align-item-center">
            <div><img :src="product.image_url" width="100px"></div>
          </div>
          <div class="col-6 text-left d-flex justify-content-center align-item-center flex-column">
            <div>{{product.name}}</div>
            <div>{{product.price}}</div>
            <div>{{product.stock}}</div>
          </div>
          <div class="col-3 d-flex justify-content-center align-item-center flex-column">
            <div>edit</div>
            <div>delete</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['products'],
  methods: {
    showFormAdd () {
      this.$router.push('/add')
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 2em;
  }
</style>
