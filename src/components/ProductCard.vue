<template>
    <div class="card">
        <img class="card-img-top" :src="data.image_url">
        <div class="card-body">
        <h4 class="card-title">{{ data.name }}</h4>
        <p class="card-text">{{ data.price }} IDR</p>
        <p class="card-text">stock: {{ data.stock }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['data']
}
</script>

<style>

</style>
