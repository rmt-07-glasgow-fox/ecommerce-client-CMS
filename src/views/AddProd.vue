<template>
  <div>
    <Navbar/>
    <!-- add Product -->
    <div class="container cont-add">
    <div>
      <h3 class="card-title" style="font-weight: bold;">
        Adding New Product
      </h3>
    <form>
      <p style="color: red;">{{errHandler}}</p>
  <div class="mb-2" >
    <label for="exampleInputEmail1"
    class="form-label"
    style="font-weight:bold;">Name :</label>
    <input
    type="text"
    class="form-control"
    v-model="addItem.name"
    id="exampleInputEmail1"
    aria-describedby="emailHelp">
  </div>
  <div class="mb-2">
    <label for="exampleInputPassword1"
    class="form-label"
    style="font-weight:bold;">Image Url :</label>
    <input
    type="text"
    class="form-control"
    v-model="addItem.image_url"
    id="exampleInputPassword1">
  </div>
  <div class="mb-2">
    <label for="exampleInputPassword1"
    class="form-label"
    style="font-weight:bold;">Price :</label>
    <input
    type="text"
    class="form-control"
    v-model="addItem.price"
    id="exampleInputPassword2">
  </div>
  <div class="mb-2">
    <label for="exampleInputPassword1"
    class="form-label"
    style="font-weight:bold;">Stock :</label>
    <input
    type="text"
    class="form-control"
    v-model="addItem.stock"
    id="exampleInputPassword3">
  </div>
  <br>
  <div style="text-align: center;">
    <button
    type="submit"
    class="btn btn-success"
    style="font-weight: bold;"
    @click.prevent="create">
    Add Product
    </button>
  </div>
</form>
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
  components: {
    Navbar,
    Footer
  },
  methods: {
    create () {
      this.$store.dispatch('createProd', this.addItem)
    }
  },
  computed: {
    errHandler () {
      return this.$store.state.loginErr
    }
  }
}
</script>

<style>
.cont-add {
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 70vh;
  justify-content: center;
  align-items: center;
  }
</style>
