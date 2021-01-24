<template>
  <div class="home">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAdd" v-if="role == 'admin'" @click="clear()">
      <span class="glyphicon glyphicon-plus"></span> Add New
    </button><br>
    <!-- <hr> -->
    <label>Category</label><br>
    <select class="mdb-select md-form" v-model="category">
      <option value="All">All</option>
      <option v-for="(option, i) in options" :key="i" :value="option">{{ option }}</option>
    </select>
    <!-- <hr> -->
    <Product :category="category"/>
    <div style="margin-top: 30px;" class="modal" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-bottom" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!--  -->
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
              <hr>
              <label>Category</label>
              <select class="mdb-select md-form w-100" v-model="product.category">
                <option value="" selected disabled hidden>Choose category</option>
                <option v-for="(option, i) in options" :key="i" :value="option">{{ option }}</option>
              </select>
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
        stock: '',
        category: ''
      },
      options: ['Fasion', 'Sport', 'Hobby', 'Drink', 'Food', 'Snack'],
      category: 'All'
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
      this.product.category = ''
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
