<template>
  <div class="col-md-3 m-4">
    <div class="card" style="width: 18rem;">
      <img :src="product.image_url" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <p>Price : {{ product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' }) }}</p>
        <p>Stock : {{ product.stock }}</p>
        <button type="button" class="btn btn-dark">EDIT</button>
        <button type="button" class="btn btn-danger" @click.prevent="deleteProduct">DELETE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    deleteProduct () {
      this.$store.dispatch('delete', this.product.id)
        .then(data => {
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
