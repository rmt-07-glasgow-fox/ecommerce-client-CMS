<template>
  <div class="container">
    <div class="row" style="display: flex; height: 100vh; align-items: center;">
      <div class="col-md-4 col-sm-4 col-xs-12"></div>
      <div class="col-md-4 col-sm-4 col-xs-12 rounded shadow-lg">
        <h3>New Product</h3>
        <form action="" method="POST">
          <input type="text" class="form-control" v-model="addPayload.name" placeholder="input product's name here"><br>
          <input type="text" class="form-control" v-model="addPayload.image_url" placeholder="input product's image url here"><br>
          <input type="number" class="form-control" v-model="addPayload.price" placeholder="input product's price here"><br>
          <input type="number" class="form-control" v-model="addPayload.stock" placeholder="input product's stock here"><br>
          <button type="button" class="btn btn-danger" @click="goToProducts">Back</button>
          <button type="button" class="btn btn-primary" @click.prevent="newProduct">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalAdd',
  data () {
    return {
      addPayload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    newProduct () {
      console.log('add product')
      this.$store.dispatch('create', this.addPayload)
        .then(data => {
          console.log('add product lagi')
          this.$store.dispatch('fetchProducts')
          this.$router.push('/products')
        })
        .catch(err => console.log(err))
    },
    goToProducts () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>
