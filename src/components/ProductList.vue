<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img-top" :src="productlist.image_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{productlist.name}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Stock: {{productlist.stock}}</li>
        <li class="list-group-item"><h6><b>Price</b></h6></li>
        <li class="list-group-item">Rp.{{productlist.price}}</li>
      </ul>
      <div class="card-body d-flex align-items-center justify-content-around">
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-primary">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['productlist']
}
</script>

<style scoped>
  img{
    height: 250px
  }

</style>
