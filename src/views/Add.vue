<template>
  <div>
    <div>
    <Navbar
      @logout="logout"
    />
    </div>

    <div class="container">
      <div>
      <form>
        <p style="color: red;">{{errLogin}}</p>
      <div class="mb-3" >
          <label for="exampleInputEmail1" class="form-label">Name :</label>
          <input type="text" class="form-control" v-model="addProduct.name" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Url Image Product:</label>
          <input type="text" class="form-control" v-model="addProduct.image_url"  id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Price :</label>
        <input type="text" class="form-control" v-model="addProduct.price" id="exampleInputPassword2">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Stock :</label>
        <input type="text" class="form-control" v-model="addProduct.stock" id="exampleInputPassword3">
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
  props: ['errLogin'],
  data () {
    return {
      addProduct: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    create () {
      this.$emit('create', this.addProduct)
    },
    logout () {
      this.$emit('logout')
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vh;
  justify-content: center;
  align-content: center;
}
</style>
