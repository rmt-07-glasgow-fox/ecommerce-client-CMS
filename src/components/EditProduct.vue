<template>
    <div class="form-page">
        <div class="container" id="add-pProduct-page">
            <h3 class="text-center">Edit Product</h3>
            <hr>
            <form @submit.prevent="editProduct">
                <div class="form-group">
                    <label for="name-edit">Name :</label>
                    <input v-model="name" type="text" class="form-control" name="name-edit" id="name-edit" required>
                </div>
                <div class="form-group">
                    <label for="image-edit">Image Url :</label>
                    <input v-model="image_url" type="text" class="form-control" name="image-edit" id="image-edit" required>
                </div>
                <div class="form-group">
                    <label for="price-edit">Price :</label>
                    <input v-model="price" type="text" class="form-control" name="price-edit" id="price-edit" required>
                </div>
                <div class="form-group">
                    <label for="stock-edit">Stock :</label>
                    <input v-model="stock" type="text" class="form-control" name="stock-edit" id="stock-edit" required>
                </div>
                <div>
                    <br>
                    <button type="submit" class="btn btn-primary" id="edit-post-btn">Submit</button>
                    <button @click="goBack" class="btn btn-danger" id="go-back-btn">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct', this.$route.params.id)
        .then(({ data }) => {
          this.name = data.name
          this.image_url = data.image_url
          this.price = data.price
          this.stock = data.stock
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('editProduct', payload)
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
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    product () {
      return this.$store.state.product
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

#go-back-btn {
  width: 30%;
  margin-left: 50px;
}

#edit-post-btn {
  width: 30%;
}
</style>
