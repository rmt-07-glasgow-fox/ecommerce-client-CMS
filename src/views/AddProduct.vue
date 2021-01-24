<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <div class="d-flex justify-content-center">
        <div class="col-md-offset-5 col-md-3">
          <input v-model="data.name" type="text" id="name" class="form-control input-sm chat-input" placeholder="Name product" />
          <br>
          <input v-model="data.image_url" type="text" id="image_url" class="form-control input-sm chat-input" placeholder="Image url" />
          <br>
          <input v-model="data.price" type="number" id="price" class="form-control input-sm chat-input" placeholder="Price" />
          <br>
          <input v-model="data.stock" type="number" id="stock" class="form-control input-sm chat-input" placeholder="Stock" />
          <br>
          <div class="wrapper">
            <span class="group-btn">
              <button class="btn btn-primary" type="submit">Submit</button>
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Addproduct',
  data () {
    return {
      data: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      const payload = this.data
      this.$store.dispatch('createProduct', payload)
      this.data.name = ''
      this.data.image_url = ''
      this.data.price = 0
      this.data.stock = 0
      this.$router.replace('Products')
    }
  }
}
</script>

<style>
  .container{
    margin: 50px
  }
</style>
