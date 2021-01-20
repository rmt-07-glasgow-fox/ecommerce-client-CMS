<template>
  <div>
    <div><Navbar/></div>
    <div class="container" style="display: flex; flex-direction: column; height: 100vh; width: 50vh; justify-content: center; align-item:center; ">
    <div >
    <form >
      <p style="color: red;">{{errHandler}}</p>
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" v-model="getEditBanner.title" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image Url</label>
    <input type="text" class="form-control" v-model="getEditBanner.image_url"  id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Status</label>
    <select name="status" v-model="getEditBanner.status" id="status">
      <option value="">---Please Select---</option>
      <option value="active"> Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary" @click.prevent="editBanner(getEditBanner.id)">Edit Banner</button>
</form>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'EditBanner',
  components: {
    Navbar
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

</style>
