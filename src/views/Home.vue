<template>
  <div class="home">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAdd" v-if="role == 'admin'" @click="clear()">
    <span class="glyphicon glyphicon-plus"></span> Add New
    </button>
    <Product/>
    <div class="modal fade modal-dialog-centered p-5" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-bottom" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                <label>Name</label>
                <input class="w-100" v-model="product.name"/>
                <hr>
                <label>imageUrl</label>
                <input class="w-100" v-model="product.imageUrl"/>
                <hr>
                <label>Price</label>
                <input class="w-100" v-model="product.price"/>
                <hr>
                <label>Stock</label>
                <input class="w-100" v-model="product.stock"/>
                </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addProduct()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  data () {
    return {
      product: {
        name: '',
        imageUrl: '',
        price: '',
        stock: ''
      }
    }
  },
  components: {
    Product
  },
  methods: {
    async addProduct () {
      const data = {
        product: this.product,
        accesstoken: this.getAccesstoken
      }
      await this.$store.dispatch('addProduct', data)
      this.findAll()
    },
    findAll () {
      this.$store.dispatch('findAll')
    },
    clear () {
      this.product.name = ''
      this.product.imageUrl = ''
      this.product.price = ''
      this.product.stock = ''
    }
  },
  computed: {
    role () {
      return this.$store.state.role
    },
    getAccesstoken () {
      return this.$store.state.accesstoken
    }
  },
  created: function () {
    this.findAll()
    if (localStorage.getItem('accesstoken')) {
      this.$store.dispatch('checktoken', localStorage.getItem('accesstoken'))
    }
  }
}
</script>
