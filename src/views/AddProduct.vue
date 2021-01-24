<template>
  <div>
    <NavBar/>
      <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <form @submit.prevent="addProduct">
                <br>
                <label class="col col-6">Add New Product</label>
                <br>
                <br>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Product Name</label>
                    <input type="text" class="form-control" required placeholder="Product Name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Product Image Url</label>
                    <input type="text" class="form-control" required placeholder="Product Image Url" v-model="image_url">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Condition</label>
                    <select class="form-control" id="exampleFormControlSelect1" required v-model="condition">
                    <option disabled value="">Please select one</option>
                    <option id="condition" value="Seccond">Seccond</option>
                    <option id="condition" value="New">New</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Product Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required placeholder="Product Description" v-model="description"></textarea>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="exampleFormControlInput1">Stock</label>
                        <input type="number" class="form-control" placeholder="Product Stock" required v-model="stock">
                    </div>
                    <div class="col-md-6">
                        <label for="exampleFormControlInput1">Price</label>
                        <input type="number" class="form-control" placeholder="Product Stock" required v-model="price">
                    </div>
                </div>
                <br>
                <div>
                    <button type="submit" class="btn btn-primary">Add New Item</button>
                </div>
            </form>
          </div>
          <div class="col-md-4"></div>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/navbar'
import Swal from 'sweetalert2'

export default {
  components: { NavBar },
  name: 'AddProductForm',
  data () {
    return {
      name: '',
      description: '',
      image_url: '',
      condition: '',
      price: 0,
      stock: 0,
      error: 0
    }
  },
  methods: {
    addProduct () {
      const payload = { name: this.name, description: this.description, image_url: this.image_url, condition: this.condition, price: this.price, stock: this.stock }
      this.$store.dispatch('addProduct', payload)
        .then(data => {
          console.log(data)
          console.log(payload)
          if (payload.name && payload.description && payload.image_url && payload.condition && payload.price > 0 && payload.stock > 0) {
            this.$router.push('/home')
          }
          this.error++
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    error  (payload) {
      if (this.error === 1) {
        console.log(payload, 'masuk watcher')
        Swal.fire(
          'Wrong Input?',
          'Product Name must be 3 - 30 charcters, Product Description should more than 3 characters, and Price and Stock should more than 0',
          'warning'
        )
        this.error = 0
      }
    }
  }
}
</script>

<style>

</style>
