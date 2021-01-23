<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="text-center">
          <h1 class="display-4 mb-5">Edit Product</h1>

          <div class="row my-4">
            <div class="col">
              <img :src="product.image_url" alt="" style="height: 400px">
            </div>
            <div class="col-6">
              <form>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                  </div>
                  <input type="text" class="form-control" v-model=product.name aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Image URL</span>
                  </div>
                  <input type="text" class="form-control" v-model=product.image_url aria-label="Image URL" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Price</span>
                  </div>
                  <input type="text" class="form-control" v-model=product.price aria-label="Price" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Stock</span>
                  </div>
                  <input type="text" class="form-control" v-model=product.stock aria-label="Stock" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Category</span>
                  </div>
                  <select class="form-select" v-model=product.Category.id aria-label="Default select example">
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                  </select>
                </div>
                <button class="btn btn-primary mx-1"
                  @click.prevent="saveChanges()">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                  Save changes
                  </button>
                <button class="btn btn-danger mx-1" @click.prevent="cancelEdit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  Cancel
                  </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductEdit',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: null,
        stock: null,
        Category: {
          id: null,
          name: ''
        }
      }
    }
  },
  methods: {
    saveChanges () {
      const payload = {
        id: this.product.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock,
        CategoryId: this.product.Category.id
      }
      this.$store.dispatch('updateProduct', payload)
    },
    cancelEdit () {
      this.$router.push({ path: '/products' })
    }
  },
  created () {
    this.$store.dispatch('getCategories')
    const productId = this.$route.params.id
    this.$store.dispatch('getSpecificProduct', productId)
      .then(({ data }) => {
        this.product = data
      })
      .catch(error => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        // this.$router.push({ path: '/products' })
      })
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }

}
</script>

<style>

</style>
