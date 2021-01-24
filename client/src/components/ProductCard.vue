<template>
  <div>
    <div class="card md-col-3 p-2 m-2">
      <div class="img-container d-flex align-items-center justify-content-center">
        <img class="card-img-top" :src="product.image_url" alt="Card image cap">
      </div>
      <div class="card-body">
        <h4 class="card-title">{{product.name}} </h4>
        <table class="text-left" >
          <tr>
            <td>Price</td>
            <td>:</td>
            <td>{{product.price}}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>:</td>
            <td>{{product.stock}}</td>
          </tr>
        </table>
        <hr>
        <p class="d-flex justify-content-between card-text">
          <router-link :to="`products/${product.id}/edit`" data-toggle="modal" data-target="#exampleModalCenter">edit</router-link>
          <a class="text-danger" @click.prevent="deleteProduct(product.id)">delete</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          this.$store.dispatch('getProducts')
          this.$store.dispatch('sweetSuccess', 'Product deleted')
        })
        .catch(err => {
          const message = err.response.data.message
          this.$store.dispatch('sweetError', message)
        })
    }
  }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  .img-container{
    width: 100%;
    height: 180px;
    overflow: hidden;
  }
  .card{
    max-width: 15em;
  }
</style>
