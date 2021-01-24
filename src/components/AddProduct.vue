<template>
<div class="container w-25 p-5 border" style="margin-top: 50px; border-radius: 10px">
  <h2 style="margin-bottom: 20px">Add Product</h2>
  <form @submit.prevent="addProduct">
    <div class="form-group">
      <label for="product-name">Product Name:</label>
      <input type="text" class="form-control" placeholder="enter product name" v-model='payload.name' required>
    </div>
    <div class="form-group">
      <label for="product-name">Image URL:</label>
      <input type="text" class="form-control" placeholder="enter image link" v-model='payload.image_url' required>
    </div>
    <div class="form-group">
      <label for="product-name">Product Stock:</label>
      <input type="number" class="form-control" placeholder="enter product stock" v-model='payload.stock' required>
    </div>
    <div class="form-group">
      <label for="product-name">Product Price:</label>
      <input type="number" class="form-control" placeholder="enter product price" v-model='payload.price' required>
    </div>
    <button type="submit" class="btn btn-primary">Add Product</button>
    <button @click.prevent= "cancelButton" type="submit" class="btn btn-danger ml-3">Cancel</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        stock: null,
        price: null
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.payload)
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
