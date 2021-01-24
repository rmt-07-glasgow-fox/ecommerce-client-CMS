<template>
  <div class="card col-3 m-2 border-dark" v-if="product.status === true">
    <img class="card-img-top mt-3" :src="product.image_url">
    <div class="card-body">
      <div class="row justify-content-center">
        <div>
          <h5 class="card-title">{{ product.name }}</h5>
        </div>
        <br>
        <div>
          <p class="card-text">{{ kursRupiah }}</p>
        </div>
      </div>
      <div class="mt-3">
        <button @click="goToDetail" class="btn btn-primary"><small>Get Details</small></button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'CardProduct',
  props: ['product'],
  methods: {
    goToDetail () {
      this.$router.push({ path: '/products/' + this.product.id })
    }
  },
  computed: {
    kursRupiah () {
      const payload = +this.product.price
      // console.log(payload, '<<< payload')
      return payload.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>
  img {
    height: 100px;
    object-fit: cover;
  }
  .box-button {
    font-size: 5px;
  }
</style>
