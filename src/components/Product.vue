<template>
  <div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-3 p-4" v-for="product in products" :key="product.id">
          <div class="card" style="width:200px">
            <img class="card-img-top" :src="product.imageUrl" style="width:198px; height:198px;" alt="Card image">
            <div class="card-body">
              <h3 class="card-title">{{product.name}}</h3>
              <p class="card-text">Price {{product.price}}</p>
              <p class="card-text">Stock {{product.stock}}</p>
              <button class="btn btn-primary" v-if="role == 'customer'">Buy</button>
              <div class="dropdown-divider"></div>
              <button class="btn btn-primary" data-toggle="modal" data-target="#modalEdit" v-if="role == 'admin'" @click="findOne(product.id)">Edit</button>
              <div class="dropdown-divider"></div>
              <button class="btn btn-primary" v-if="role == 'admin'" @click="destroy(product.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-dialog-centered p-5" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="update()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      product: {
        id: '',
        name: '',
        imageUrl: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    async update () {
      const data = {
        id: this.product.id,
        product: this.product,
        accesstoken: this.getAccesstoken
      }
      await this.$store.dispatch('update', data)
      this.clear()
    },
    findAll () {
      this.$store.dispatch('findAll')
    },
    findOne (id) {
      const data = {
        product: id,
        accesstoken: this.getAccesstoken
      }
      this.$store.dispatch('findOne', data)
    },
    async destroy (id) {
      const data = {
        product: id,
        accesstoken: this.getAccesstoken
      }
      await this.$store.dispatch('delete', data)
    },
    clear () {
      this.product.id = ''
      this.product.name = ''
      this.product.imageUrl = ''
      this.product.price = ''
      this.product.stock = ''
    }
  },
  computed: {
    getAccesstoken () {
      return this.$store.state.accesstoken
    },
    products () {
      return this.$store.state.products
    },
    getProduct () {
      return this.$store.state.product
    },
    role () {
      return this.$store.state.role
    }
  },
  created: function () {
    this.findAll()

    if (localStorage.getItem('accesstoken')) {
      this.$store.dispatch('checktoken', localStorage.getItem('accesstoken'))
    }
  },
  watch: {
    getProduct: function () {
      this.product = this.getProduct
    }
  }
}
</script>
