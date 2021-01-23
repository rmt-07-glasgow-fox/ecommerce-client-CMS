<template>
    <div class="col-4">
        <div class="card" style="width: 18rem;">
        <img :src="product.image_url" class="card-img-top" alt="...">
            <div class="pt-3 mb-3">
            <b><p class="card-title" >{{product.name}}</p></b>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: Rp.{{product.price}}</li>
            <li class="list-group-item">Stock: {{product.stock}}</li>
            <li class="list-group-item">Category: {{product.category}}</li>
            </ul>
            <div class="card-body">
            <a href="#"  class="card-link">Edit</a>
            <a href="#" class="card-link">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>
