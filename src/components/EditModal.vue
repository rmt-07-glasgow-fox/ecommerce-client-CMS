<template>
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
          <div class="form-group">
            <label class="col-form-label float-left">Product Name:</label>
            <input type="text" class="form-control" v-model="productById.name">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Image:</label>
            <input type="text" class="form-control" v-model="productById.image_url">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Price:</label>
            <input type="number" class="form-control" v-model="productById.price">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Stock:</label>
            <input type="number" class="form-control" v-model="productById.stock">
          </div>
        </form>
        </div>
                <div class="modal-footer">
                    <router-link class="btn btn-secondary" :to="`/product`" data-dismiss="modal">Cancel</router-link>
                    <a class="btn btn-info" data-dismiss="modal" @click="updateProduct()">Update</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'EditProduct',
  data () {
    return {
      listProduct: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    editProduct () {
      // const id = this.currentRouteId
      // console.log(id, 'route params id')
      this.$store.dispatch('editProduct', this.currentRouteId)
    },
    updateProduct () {
      this.$store.dispatch('updateProduct', this.listProduct)
        .then(({ data }) => {
          this.$router.push('/product')
          this.$store.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    currentRouteId () {
      // console.log(this.$route.params.id, 'route id')
      return this.$route.params.id
    },
    productById () {
      return this.$store.state.productById
    }
  },
  created () {
    this.editProduct()
  }
}
</script>

<style>

</style>
