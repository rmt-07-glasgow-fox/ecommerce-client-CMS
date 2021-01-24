<template>
    <div class="container w-25 p-5 border" style="margin-top: 50px; border-radius: 10px">
  <h2 style="margin-bottom: 20px">Edit Product</h2>
  <form @submit.prevent="editProduct">
    <div class="form-group">
      <label for="product-name">Product Name:</label>
      <input type="text" class="form-control" v-model='payload.name' required>
    </div>
    <div class="form-group">
      <label for="product-name">Image URL:</label>
      <input type="text" class="form-control"  v-model='payload.image_url' required>
    </div>
    <div class="form-group">
      <label for="product-name">Product Stock:</label>
      <input type="number" class="form-control" v-model='payload.stock' required>
    </div>
    <div class="form-group">
      <label for="product-name">Product Price:</label>
      <input type="number" class="form-control"  v-model='payload.price' required>
    </div>
    <button type="submit" class="btn btn-primary">Edit Product</button>
    <button @click.prevent= "cancelButton" type="submit" class="btn btn-danger ml-3">Cancel</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        stock: null,
        price: null,
        id: null
      }
    }
  },
  methods: {
    fetchProductId () {
      this.$store.dispatch('fetchProductId', this.$route.params.id)
        .then(({ data }) => {
          this.payload.name = data.name
          this.payload.image_url = data.image_url
          this.payload.stock = data.stock
          this.payload.price = data.price
          this.payload.id = data.id
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct () {
      this.$store.dispatch('editProduct', this.payload)
        .then(data => {
          this.$router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    cancelButton () {
      this.$router.push('/dashboard')
    }
  },
  created () {
    this.fetchProductId()
  },
  computed: {
    editedProduct () {
      return this.$store.state.editedProduct
    }
  }
}
</script>

<style scoped>
.btn-danger{
  color:#fff;
  background-color:#c70039;
  border-color: white;
}

.btn-primary{
  color:#fff;
  background-color:#111d5e;
  border-color: white;
}
</style>
