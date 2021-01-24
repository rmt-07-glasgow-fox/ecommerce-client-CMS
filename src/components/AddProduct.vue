<template>
  <div>
  <h1 style="color: white;">Add Product</h1>
    <div class="container-fluid my-4">
      <div class="row">
        <div class="col-10 mt-3 pt-4 px-5 transparent">
          <form action="">
            <div>
              <label for="prodName">Name:</label>
              <input class="form-control" v-model="addProduct.name" type="text" id="prodName">
              <small class="form-text text-danger mx-2" v-visible="errorName"> {{ errorName }}</small>

              <label for="prodPrice">Price:</label>
              <input class="form-control" v-model="addProduct.price" type="number" id="prodPrice">
              <small class="form-text text-danger mx-2" v-visible="'null'"> null </small>

              <label for="prodStock">Stock:</label>
              <input class="form-control" v-model="addProduct.stock" type="number" id="prodStock">
              <small class="form-text text-danger mx-2" v-visible="'null'"> null </small>

              <label for="prodImageURL">Image URL:</label>
              <input class="form-control" v-model="addProduct.image_url" type="text" id="prodImageURL">
              <small class="form-text text-danger mx-2" v-visible="errorImage"> {{ errorImage }}</small>
            </div>
            <div class="row align-items-center">
              <div class="col-8">

              </div>
              <div class="col-1 my-4 mx-2">
                <button type="button" class="btn btn-secondary" @click="cancelAdd">Cancel</button>
              </div>
              <div class="col-2 my-4 mx-2">
                <button type="button" class="btn btn-primary" @click="addProductClick">Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      addProduct: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  computed: {
    errorName () {
      return this.errorContains('Product')
    },
    errorImage () {
      return this.errorContains('Image')
    }
  },
  methods: {
    cancelAdd () {
      this.$router.push('/products')
      this.$store.commit('resetErrorMessage')
    },
    addProductClick () {
      this.$store.commit('addProductMt', this.addProduct)
      this.$store.dispatch('addProduct')
        .then(response => {
          this.$store.dispatch('fetchProducts')
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err, 'errProductClick')
        })
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
  }
}
</script>
