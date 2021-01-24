<template>
  <div class="modal fade" id="exampleModalCenter" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
              <div class="form-group text-left">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Product's name" v-model="product.name">
              </div>
              <div class="form-group text-left">
                <label for="url">Image Url:</label>
                <input type="url" class="form-control" id="url" placeholder="Image url" v-model="product.image_url">
              </div>
              <div class="form-group text-left">
                <label for="price">Price:</label>
                <input type="number" class="form-control" id="price" placeholder="0" v-model="product.price">
              </div>
              <div class="form-group text-left">
                <label for="stock">Stock:</label>
                <input type="number" class="form-control" id="stock" placeholder="0" v-model="product.stock">
              </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success" @click="update()" data-dismiss="modal">Save changes</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="close()">Close</button>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EditProduct',
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
    close () {
      setTimeout(() => {
        this.$router.push('/')
      }, 500)
    },
    update () {
      this.$store.dispatch('updateProduct', this.product)
        .then(({ data }) => {
          setTimeout(() => {
            this.$router.push('/')
          }, 500)
          this.$store.dispatch('sweetSuccess', 'Product edited')
          this.$store.dispatch('getProducts')
            .catch(err => {
              const message = err.response.data.message
              this.$store.dispatch('sweetError', message)
            })
        })
        .catch(err => {
          const message = err.response.data.message
          this.$store.dispatch('sweetError', message)
        })
    }
  },
  computed: {
    ...mapState([
      'productList'
    ])
  },
  created () {
    this.productList.forEach(el => {
      if (el.id === +this.$route.params.id) {
        this.product = el
        // console.log(el, this.product)
      }
    })
  }
}
</script>

<style scoped>

</style>
