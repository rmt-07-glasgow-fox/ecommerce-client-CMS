<template>
   <div class="my-container">
    <h1 style="text-align: center">Edit Content</h1>
    <br>
    <div class="d-flex align-items-center" style=" flex-direction: column;">
      <div class="col-4">
        <form>
      <div class="form-group">
        <input type="text" class="form-control" id="edit-name" style="text-align: center" v-model="singleBanner.title">
      </div>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" id="edit-category" placeholder="status" style="text-align: center" v-model="singleBanner.status">
      </div>
      <br>
      <div class="form-group">
        <input type="text" class="form-control" id="edit-price" placeholder="Price" style="text-align: center" v-model="singleBanner.imageUrl">
      </div>
      <br>
      <div style="display: flex; justify-content: center">
      <button type="submit" class="btn btn-primary" @click.prevent="submitEditBanner()">Edit Banner</button> <button type="submit" class="btn btn-danger" @click.prevent="goToDashboard">Cancel</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  methods: {
    goToDashboard () {
      this.$router.push('/dashboard')
    },
    submitEditBanner () {
      this.$store.dispatch('submitEditBanner', this.singleBanner)
    },
    fetchOneDataBanner () {
      this.$store.dispatch('fetchOneDataBanner', this.$route.params.id)
    }
  },
  created: function () {
    this.fetchOneDataBanner()
    this.$store.commit('checkAuth')
  },
  computed: {
    singleBanner () {
      return this.$store.state.singleBanner
    }
  }
}
</script>

<style>
.my-container {
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 15vh;
  background-color: #DBCFAB;
}
</style>
