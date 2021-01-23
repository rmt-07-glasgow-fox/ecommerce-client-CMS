<template>
    <div>
    <NavBar/>
      <div class="row container mt-5">
          <div class="col-md-4 mt-5">
            <br>
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" :src="oneDataProduct.image_url" alt="Card image cap">
              <div class="card-body">
              <p class="font-weight-bold"> <b>Previous data Product</b> </p>
                <p> <b>Name :</b> {{oneDataProduct.name}}</p>
                <p> <b>Description :</b> {{oneDataProduct.description}}</p>
                <p> <b>Condition :</b> {{oneDataProduct.condition}}</p>
                <p> <b>Price :</b> {{oneDataProduct.price}}</p>
                <p> <b>Stock :</b> {{oneDataProduct.stock}}</p>
                <p> <b>image_url :</b> {{oneDataProduct.image_url}}</p>
              </div>
            </div>
            <br><br>
          </div>
          <div class="col-md-6">
            <form @submit.prevent="editProduct">
                <br>
                <label class="h2 font-weight-bold">Edit Product</label>
                <br>
                <br>
                <div class="form-group">
                    <label>Product Name</label>
                    <br>
                    <input type="text" class="form-control" placeholder="Product Name" v-model="name">
                </div>
                <div class="form-group">
                    <label>Product Image Url</label>
                    <input type="text" class="form-control" placeholder="Product Image Url" v-model="image_url">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Condition</label>
                    <select class="form-control" id="exampleFormControlSelect1" v-model="condition">
                    <option id="condition" value="Seccond">New</option>
                    <option id="condition" value="New">Seccond</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Product Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Product Description" v-model="description"></textarea>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label>Stock</label>
                        <input type="number" class="form-control" placeholder="Product Stock" v-model="stock">
                    </div>
                    <div class="col-md-6">
                        <label>Price</label>
                        <input type="number" class="form-control" placeholder="Product Stock" v-model="price">
                    </div>
                </div>
                <br>
                <div>
                    <button type="submit" class="btn btn-primary btn-block">Save Changes</button>
                </div>
            </form>
            <br><br>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '../components/navbar'
import Swal from 'sweetalert2'

export default {
  components: { NavBar },
  name: 'EditForm',
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
    getOneData () {
      const payload = this.$route.params.id
      this.$store.dispatch('fetchOneData', payload)
        .then(data => {
          console.log('masuk sini')
        })
        .catch(err => {
          this.$router.push(`/product/${payload}/edit`)
          console.log(err)
        })
    },
    editProduct () {
      const temp = { name: this.name, description: this.description, image_url: this.image_url, condition: this.condition, price: this.price, stock: this.stock }
      const payload = { temp: temp, id: this.$route.params.id }
      this.$store.dispatch('editProduct', payload)
        .then(data => {
          console.log(data)
          if (temp.name && temp.description && temp.image_url && temp.condition && temp.price >= 1 && temp.stock >= 1) {
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
          'Price and Stock should more than 0',
          'warning'
        )
        this.error = 0
      }
    }
  },
  created () {
    this.getOneData()
  },
  computed: {
    ...mapState(['oneDataProduct'])
  }
}
</script>

<style>

</style>
