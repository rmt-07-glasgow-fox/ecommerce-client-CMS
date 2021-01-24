<template>
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
                <img class="card-img-top" :src="product.image_url" alt="product">
                <div class="card-body pt-4" >
                    <h4 class="card-title text-primary"> {{ product.name }} </h4>
                    <h5>Rp {{ product.price.toLocaleString() }}</h5>
                    <h5>Stock : {{ product.stock }}</h5>
                </div>
                <div class="card-footer">
                    <button @click.prevent="goToEdit" type="button" class="btn btn-secondary btn-sm m-1">Update</button>
                    <button @click.prevent="goDelete" type="button" class="btn btn-secondary btn-sm m-1">Delete</button>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  name: 'ProductCards',
  props: ['product'],
  methods: {
    goToEdit () {
      this.$router.push('/products/edit/' + this.product.id)
    },
    goDelete () {
      this.$store.dispatch('deleteProduct', this.product.id)
        .then(data => {
          this.$store.dispatch('getProducts')
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
    height: 18vw;
    object-fit: cover;
}
</style>
