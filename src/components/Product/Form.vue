<template>
  <div>
    <div class="form-group">
        <label for>Name</label>
        <input type="text" class="form-control" v-model="product.name" placeholder="Product Name">
    </div>
    <div class="row">
    <div class="col-md-6 form-group">
      <label for>Price</label>
      <input type="number" min="0" value="0" class="form-control" v-model="product.price" />
    </div>
    <div class="col-md-6 form-group">
      <label for>Stock</label>
      <input type="number" min="0" value="0" class="form-control" v-model="product.stock" />
    </div>
    </div>
    <div class="form-group">
      <label for>
        Category
      </label>
      <select v-model="product.categoryId" class="form-control">
        <option
          v-for="(row, index) in categories"
          :key="index"
          :value="row.id"
        >{{ row.name }}</option>
      </select>
    </div>
    <div class="form-group">
        <label for>Image URL</label>
        <input type="text" class="form-control" v-model="product.image_url" placeholder="Image URL">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'FormProduct',
  data () {
    return {
      product: {
        name: '',
        stock: 0,
        price: 0,
        categoryId: 1,
        image_url: ''
      }
    }
  },
  computed: {
    ...mapState(['errors']),
    ...mapState('product', {
      categories: state => state.category
    })
  },
  methods: {
    ...mapActions('product', [
      'getProducts',
      'addProduct',
      'editProduct',
      'updateProduct',
      'getCategories'
    ]),

    clearForm () {
      this.product = {
        name: '',
        stock: '',
        price: '',
        categoryId: '',
        image_url: ''
      }
    },

    submit () {
      if (this.$route.name === 'product.add') {
        this.addProduct(this.product)
      } else if (this.$route.name === 'product.edit') {
        Object.assign(this.product, { id: this.$route.params.id })
        this.updateProduct(this.product)
      }
    }
  },
  created () {
    this.getCategories()

    if (this.$route.name === 'product.edit') {
      this.editProduct(this.$route.params.id).then(res => {
        this.product = {
          name: res.data.name,
          stock: res.data.stock,
          price: res.data.price,
          categoryId: res.data.categoryId,
          image_url: res.data.image_url
        }
      })
    }
  }
}
</script>
