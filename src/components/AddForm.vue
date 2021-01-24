<template>
  <div id="bg-add">
    <div v-if="this.user_status === 'admin'">
      <div class="container" id="add-form">
        <h1>Add Product</h1><br><br>
        <form class="" @submit.prevent="add">
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text col-2" id="basic-addon1">Name</span>
              <input v-model="addData.name" type="text" class="form-control" placeholder="input product name">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text col-2" id="basic-addon1">Image URL</span>
              <input v-model="addData.image_url" type="text" class="form-control" placeholder="input image url">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text col-2" id="basic-addon1">Price</span>
              <input v-model="addData.price" type="number" class="form-control" placeholder="input product price">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text col-2" id="basic-addon1">Stock</span>
              <input v-model="addData.stock" type="number" class="form-control" placeholder="input product stock">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-3">
              <span class="input-group-text col-2" id="basic-addon1">Category</span>
              <input v-model="addData.category" type="text" class="form-control" placeholder="input category">
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100px">Add</button>
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
import NotFound from '../components/NotFound'
import swal from 'sweetalert'
export default {
  name: 'AddForm',
  data () {
    return {
      user_status: localStorage.getItem('user_status')
    }
  },
  components: {
    NotFound
  },
  methods: {
    add () {
      swal({
        title: 'Are you sure you want to add this product?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$store.dispatch('add', this.addData)
            this.$router.push('/admin')
            swal('Product has been added', {
              icon: 'success'
            })
          }
        })
    }
  },
  computed: {
    ...mapState([
      'addData'
    ])
  }
}
</script>

<style>
#add-form {
  margin-top: 100px;
}
</style>
