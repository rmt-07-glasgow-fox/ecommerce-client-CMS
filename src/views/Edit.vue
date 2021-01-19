<template>
  <div>
    <div>
      <Navbar
      @logout="logout"
    />
    </div>
    <div class="container" style="display: flex; flex-direction: column; height: 100vh; width: 50vw; justify-content: center; align-item:center; ">
    <form>
      <p style="color: red;">{{loginErr}}</p>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" v-model="product.name" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image Url</label>
    <input type="text" class="form-control" v-model="product.image_url"  id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" class="form-control" v-model="product.price" id="exampleInputPassword2">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Stock</label>
    <input type="text" class="form-control" v-model="product.stock" id="exampleInputPassword3">
  </div>
  <button type="submit" class="btn btn-primary" @click.prevent="edit(product.id)">Edit</button>
</form>
  </div>
  </div>
</template>

<script>

import Navbar from '../components/Navbar'
export default {
  name: 'Edit',
  props: ['product', 'loginErr'],
  components: {
    Navbar
  },
  methods: {
    logout () {
      this.$emit('logout')
    },
    edit (id) {
      this.$emit('edit', id)
    }
  }
}
</script>

<style>

</style>
