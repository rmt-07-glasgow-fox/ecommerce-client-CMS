<template>
  <div class="container mt-3">
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <h1 class="text-dark">Edit Banner</h1>
        <div class="card shadow mb-5">
          <div class="card-body">
            <form @submit.prevent="editBanner">
              <div class="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Product Name" class="form-control" v-model="banner.title">
              </div>
              <div class="form-group">
                <label>Product Status</label>
                <select class="form-control"
                  v-model="banner.status">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div class="form-group">
                <label>Product Image</label>
                <input type="text" placeholder="Product Image" class="form-control" v-model="banner.image_url">
              </div>
              <button type="submit" class="btn btn-primary">Confirm</button>
              <a class="btn btn-danger ml-3" @click="deleteBanner">Delete</a>
              <a class="btn btn-warning ml-3 text-white" @click="back">Cancel</a>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  computed: {
    banner () {
      return this.$store.state.bannerById
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    deleteBanner () {
      const id = this.$route.params.id
      this.$store.dispatch('deleteBanner', id)
    },
    editBanner () {
      const id = this.$route.params.id
      const payload = {
        id,
        title: this.banner.title,
        status: this.banner.status,
        imageurl: this.banner.image_url
      }
      this.$store.dispatch('editBanner', payload)
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('fetchBannerById', id)
  }
}
</script>

<style>

</style>
