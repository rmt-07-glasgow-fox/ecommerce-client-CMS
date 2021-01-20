<template>
  <div>
      <h3>Edit</h3>
    <div  style="margin-left: 450px; margin-top: 20px">
        <form class="col-4" @submit.prevent="edit">
        <div class="form-group">
            <label>Name</label>
            <input
            type="text"
            class="form-control"
            placeholder="Name Product"
            v-model="one.name"
            required
            />
        </div>
        <div>
            <label>Image_url</label>
            <input
            type="text"
            class="form-control"
            placeholder="Url"
            v-model="one.image_url"
            required
            />
        </div>
        <div>
            <label>Price</label>
            <input
            type="number"
            class="form-control"
            placeholder="50000"
            v-model="one.price"
            required
            />
        </div>
        <div>
            <label>Stock</label>
            <input
            type="number"
            class="form-control"
            placeholder="25"
            v-model="one.stock"
            required
            />
        </div>
        <button type="submit" style="margin: 10px 10px" class="btn btn-primary">
            Edit Product
        </button>
        <button style="margin: 10px 10px" class="btn btn-danger" @click="back">
            Cancel
        </button>
        </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EditProduct',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    back () {
      this.$router.push('/products')
    },
    edit () {
      this.$store.dispatch('editProduct', this.payload)
    }
  },
  computed: {
    ...mapState({
      one: 'one'
    })
  }
}
</script>

<style>
</style>
