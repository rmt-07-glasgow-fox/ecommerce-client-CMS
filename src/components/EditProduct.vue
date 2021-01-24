<template>
  <div>
  <h1 style="color: white;">Product Detail</h1>
    <div class="container-fluid my-4 px-5 mt-3 pt-4 transparent">
      <div class="row my-4">
        <div class="col-3 mt-5">
          <img :src="product.image_url" :alt="product.name" height="250px" width="250px">
        </div>
         <div class="col-8 mx-4">
           <form action="">
            <label for="editProdName">Product Name:</label>
            <input type="text" id="editProdName" class="form-control" v-model="product.name">
            <small class="form-text text-danger mx-2" v-visible="errorName"> {{ errorName }}</small>

            <label for="editProdPrice">Price:</label>
            <input type="number" id="editProdPrice" class="form-control" v-model="product.price">
            <small class="form-text text-danger mx-2" v-visible="'null'"> null </small>

            <label for="editProdStock">Stock:</label>
            <input type="number" id="editProdStock" class="form-control" v-model="product.stock">
            <small class="form-text text-danger mx-2" v-visible="'null'"> null </small>

            <label for="editProdImgURL">Image URL:</label>
            <input type="text" id="editProdImgURL" class="form-control" v-model="product.image_url">
            <small class="form-text text-danger mx-2" v-visible="errorImage"> {{ errorImage }}</small>
           </form>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-7">

        </div>
        <div class="col-1 my-4 mx-2">
          <button type="button" class="btn btn-danger" @click="deleteProductClick">Delete</button>
        </div>
        <div class="col-1 my-4 mx-2">
          <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
        </div>
        <div class="col-2 my-4 mx-2">
          <button type="button" class="btn btn-primary" @click="editProductClick">Edit Product</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row" style="height: 0.3vh">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  methods: {
    deleteProductClick () {
      this.$store.dispatch('deleteProduct', +this.$route.params.id)
      this.$store.dispatch('fetchProducts')
      this.$router.push('/products')
    },
    editProductClick () {
      this.$store.commit('editProductMt', this.product)
      this.$store.dispatch('editProduct', +this.$route.params.id)
        .then(response => {
          this.$store.dispatch('fetchProducts')
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err, 'error editProductClick')
        })
    },
    cancelEdit () {
      this.$router.push('/products')
      this.$store.commit('resetErrorMessage')
    },
    errorContains (string) {
      const errors = this.$store.state.errorMessages
      if (errors) {
        var data = errors.filter(e => {
          if (e.includes(string)) {
            return e
          }
        })
      }

      if (data.length === 0) {
        return 'null'
      } else {
        return data[0]
      }
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    errorName () {
      return this.errorContains('Product')
    },
    errorImage () {
      return this.errorContains('Image')
    }
  },
  created () {
    this.$store.dispatch('fetchOneProduct', +this.$route.params.id)
  }
}
</script>
