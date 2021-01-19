<template>
  <div>
    <div>
    <Navbar
    @logout="logout"
    />
    </div>
    <div class="container" style="display: flex; flex-direction: column; height: 100vh; width: 50vh; justify-content: center; align-item:center; ">
    <div >
    <form >
      <p style="color: red;">{{loginErr}}</p>
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" v-model="addItem.name" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image Url</label>
    <input type="text" class="form-control" v-model="addItem.image_url"  id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" class="form-control" v-model="addItem.price" id="exampleInputPassword2">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Stock</label>
    <input type="text" class="form-control" v-model="addItem.stock" id="exampleInputPassword3">
  </div>
  <button type="submit" class="btn btn-primary" @click.prevent="create">Add Product</button>
</form>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Add',
  data () {
    return {
      addItem: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  props: ['loginErr'],
  components: {
    Navbar
  },
  methods: {
    logout () {
      this.$emit('logout')
    },
    create () {
      this.$emit('create', this.addItem)
    }
  }
}
</script>

<style>

</style>
