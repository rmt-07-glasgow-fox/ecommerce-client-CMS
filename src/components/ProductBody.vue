<template>
  <div class="col-md-3 m-5">
    <div class="card" style="border-radius: 25px">
      <img class="card-img-top" style="border-radius: 25px 25px 0px 0px; height: 300px" :src="product.image_url" alt="">
      <div class="card-body">
        <h4 class="card-title">
          {{ product.name }}
        </h4>
        <h5>Rp. {{ product.price.toLocaleString() }}</h5>
        <h5>Stock: {{ product.stock }}</h5>
      </div>
      <div class="card-footer">
        <button @click.prevent="goToEdit" class="btn btn-primary">Edit</button>
        <button @click.prevent="goDelete" class="btn btn-danger ml-2">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductBody',
  props: ['product'],
  methods: {
    goToEdit () {
      this.$router.push('/editProduct/' + this.product.id)
    },
    goDelete () {
      this.$store.dispatch('deleteProduct', this.product.id)
        .then(data => {
          this.$store.dispatch('fetchData')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>
