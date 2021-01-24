<template>
<div>
  <div v-if="this.user_status === 'admin'">
    <div class="container" id="edit-form">
      <h1>Edit Product #{{product.id}}</h1><br><br>
      <form class="" @submit.prevent="update">
        <div class="form-group">
          <div class="input-group mb-3">
            <span class="input-group-text col-2" id="basic-addon1">Name</span>
            <input v-model="product.name" type="text" class="form-control" placeholder="input name">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <span class="input-group-text col-2" id="basic-addon1">Image URL</span>
            <input v-model="product.image_url" type="text" class="form-control" placeholder="input image URL">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <span class="input-group-text col-2" id="basic-addon1">Price</span>
            <input v-model="product.price" type="text" class="form-control" placeholder="input price">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <span class="input-group-text col-2" id="basic-addon1">Stock</span>
            <input v-model="product.stock" type="text" class="form-control" placeholder="input stock">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group mb-3">
            <span class="input-group-text col-2" id="basic-addon1">Category</span>
            <input v-model="product.category" type="text" class="form-control" placeholder="input category">
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100px">Update</button>
        <router-link class="btn btn-secondary" to="/admin" style="width: 100px;margin-left: 30px">Cancel</router-link>
      </form>
    </div>
  </div>
  <div v-else>
    <NotFound></NotFound>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import swal from 'sweetalert'
import NotFound from '../components/NotFound'
export default {
  name: 'EditForm',
  data () {
    return {
      user_status: localStorage.getItem('user_status')
    }
  },
  components: {
    NotFound
  },
  methods: {
    fetchOneProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchOneProduct', id)
    },
    update () {
      const body = {
        id: this.product.id,
        name: this.product.name,
        category: this.product.category,
        price: this.product.price,
        stock: this.product.stock,
        image_url: this.product.image_url
      }
      swal({
        title: 'Are you sure you want to update this product?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$store.dispatch('update', body)
            this.$router.push('/admin')
            swal('Product has been updated', {
              icon: 'success'
            })
          }
        })
    }
  },
  created () {
    this.fetchOneProduct()
  },
  computed: {
    ...mapState([
      'product'
    ])
  }
}
</script>

<style>
#edit-form {
  margin-top: 100px;
}
</style>
