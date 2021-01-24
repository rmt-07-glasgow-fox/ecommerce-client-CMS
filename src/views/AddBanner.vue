<template>
  <div>
    <div><Navbar/></div>
    <!-- add Banner -->
    <div
      class="container cont-add-banner">
      <h3 class="card-title" style="font-weight:bold">Adding new Banner</h3>
    <div>
    <form>
      <p style="color: red;">{{errHandler}}</p>
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label" style="font-weight:bold;">Title :</label>
    <input
    type="text"
    class="form-control"
    v-model="addBanner.title"
    id="exampleInputEmail1"
    aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style="font-weight:bold;">Image Url :</label>
    <input
    type="text"
    class="form-control"
    v-model="addBanner.image_url"
    id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style="font-weight:bold;">Status :</label>
    <br>
    <select name="status" v-model="addBanner.status" id="status">
      <option value="">---Please Select---</option>
      <option value="active"> Active</option>
      <option value="inactive">Discontinued</option>
    </select>
  </div>
  <div style="text-align: center">
  <button
    type="submit"
    class="btn btn-success"
    style="font-weight: bold"
    @click.prevent="createBanner">
    Add Banner
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
import Footer from '../components/Footer.vue'

export default {
  name: 'AddBanner',
  data () {
    return {
      addBanner: {
        title: '',
        status: '',
        image_url: ''
      }
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    createBanner () {
      this.$store.dispatch('createBanner', this.addBanner)
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
.cont-add-banner {
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 70vh;
  justify-content: center;
  align-items:center;
}
</style>
