<template>
  <div class="col-3">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Rp. {{ product.price }}</p>
        <button @click="goToDetail" class="btn btn-primary">Info</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    goToDetail (payload) {
      this.$router.push('/productdetail/' + this.product.id)
    }
  }
}
</script>

<style>
.card-body {
  text-align: left;
}
</style>
