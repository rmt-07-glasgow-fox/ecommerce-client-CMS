<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <div class="d-flex justify-content-center">
        <div class="col-md-offset-5 col-md-3">
          <input v-model="payload.name" type="text" id="name" class="form-control input-sm chat-input" placeholder="Name product" />
          <br>
          <input v-model="payload.image_url" type="text" id="image_url" class="form-control input-sm chat-input" placeholder="Image url" />
          <br>
          <input v-model="payload.price" type="number" id="price" class="form-control input-sm chat-input" placeholder="Price" />
          <br>
          <input v-model="payload.stock" type="number" id="stock" class="form-control input-sm chat-input" placeholder="Stock" />
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
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  }
  // methods: {
  //   editProduct () {
  //     this.$store.dispatch('editproduct', payload),
  //     this.$router.replace('Products')
  //   }
  // }
}
</script>

<style>

</style>
