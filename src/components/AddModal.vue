<template>
  <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
          <form>
          <div class="form-group">
            <label class="col-form-label float-left">Product Name:</label>
            <input type="text" class="form-control" v-model="product.name">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Image:</label>
            <input type="text" class="form-control" v-model="product.image_url">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Price:</label>
            <input type="number" class="form-control" v-model="product.price">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Stock:</label>
            <input type="number" class="form-control" v-model="product.stock">
          </div>
        </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" type="button" data-dismiss="modal" @click="addProduct()">Add</button>
                    <!-- <a class="btn btn-primary">Add</a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
        .then(() => {
          this.$router.push('/product')
          this.$store.dispatch('fetchProduct')
            .catch(err => {
              console.log(err.response.data.message)
            })
        })
        .catch(err => {
          console.log(err, 'error gan!')
        })
    }
  }
}
</script>

<style>

</style>
