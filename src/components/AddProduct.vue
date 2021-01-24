<template>
    <div class="form-page">
        <div class="container" id="add-pProduct-page">
          <div>
            <h3 class="text-center">Add Product</h3>
          </div>
          <hr>
            <form @submit.prevent="AddProduct">
                <div class="form-group">
                    <label for="name-add">Name :</label>
                    <input v-model="name" type="text" class="form-control" name="name-add" id="name-add" placeholder="Enter Name" required>
                </div>
                <div class="form-group">
                    <label for="image-add">Image Url :</label>
                    <input v-model="image_url" type="text" class="form-control" name="image-add" id="image-add" placeholder="Enter Image Url" required>
                </div>
                <div class="form-group">
                    <label for="price-add">Price :</label>
                    <input v-model="price" type="text" class="form-control" name="price-add" id="price-add" placeholder="Enter Product's Price" required>
                </div>
                <div class="form-group">
                    <label for="stock-add">Stock :</label>
                    <input v-model="stock" type="text" class="form-control" name="stock-add" id="stock-add" placeholder="Enter Product's Stock" required>
                </div>
                <div>
                    <br>
                    <button type="submit" class="btn btn-primary" id="add-post-btn">Submit</button>
                    <button @click="goBack" class="btn btn-danger" id="go-back-btn">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  methods: {
    AddProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(() => {
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    goBack () {
      this.$router.push('/products')
    }
  }
}
</script>
<style scoped>
.form-page .container {
  width: 40%;
  margin-top: 5%;
  padding: 30px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
}

.form-group {
  text-align: left;
}
#go-back-btn {
  width: 30%;
  margin-left: 50px;
}

#add-post-btn {
  width: 30%;
}
</style>
