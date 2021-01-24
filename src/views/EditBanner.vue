<template>
  <div>
    <div><Navbar/></div>
    <!-- Edit Banner -->
    <div class="container cont-edit-banner" style="">
    <div>
      <h3 style="font-weight: bold">Edit Banner</h3>
    <form>
      <p style="color: red;">{{errHandler}}</p>
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label" style="font-weight:bold;">Title :</label>
    <input
    type="text"
    class="form-control"
    v-model="getEditBanner.title"
    id="exampleInputEmail1"
    aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style="font-weight:bold;">Image Url :</label>
    <input
    type="text"
    class="form-control"
    v-model="getEditBanner.image_url"
    id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" style="font-weight: bold">Status :</label>
    <br>
    <select name="status" v-model="getEditBanner.status" id="status">
      <option value="">---Please Select---</option>
      <option value="active"> Active</option>
      <option value="inactive">Discontinued</option>
    </select>
  </div>
  <div style="text-align: center">
  <button
  type="submit"
  class="btn btn-primary"
  style="font-weight: bold"
  @click.prevent="editBanner(getEditBanner.id)">
  Edit Banner
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
  name: 'EditBanner',
  components: {
    Navbar,
    Footer
  },
  methods: {
    editBanner (id) {
      this.$store.dispatch('editBanner', id)
    }
  },
  computed: {
    getEditBanner () {
      return this.$store.state.banner
    },
    errHandler () {
      return this.$store.state.loginErr
    }
  }
}
</script>

<style>
.cont-edit-banner {
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 45vw;
  justify-content: center;
  align-items: center;
}
</style>
