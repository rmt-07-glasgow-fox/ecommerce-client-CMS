<template>
  <div class="card" style="width: 18rem;">
        <img :src="product.image_url" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">price: {{ product.price }}</li>
          <li class="list-group-item">stock: {{ product.stock }}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Delete</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListProducts',
  props: ['product']
}
</script>

<style>

</style>
