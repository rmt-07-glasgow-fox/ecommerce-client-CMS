<template>
  <div class="container mt-3">
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <h1 class="text-dark">Add a New Banner</h1>
        <div class="card shadow mb-5">
          <div class="card-body">
            <form @submit.prevent="addBanner">
              <div class="form-group">
                <label>Product Name</label>
                <input type="text" placeholder="Product Name" class="form-control" v-model="add.title">
              </div>
              <div class="form-group">
                <label>Product Status</label>
                <select class="form-control"
                  v-model="add.status">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div class="form-group">
                <label>Product Image</label>
                <input type="text" placeholder="Product Image" class="form-control" v-model="add.image_url">
              </div>
              <button type="submit" class="btn btn-primary">Add Product</button>
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
  name: 'AddBanner',
  data () {
    return {
      add: {
        title: '',
        image_url: '',
        status: 'true'
      }
    }
  },
  methods: {
    addBanner () {
      const payload = {
        title: this.add.title,
        image_url: this.add.image_url,
        status: this.add.status
      }

      this.$store.dispatch('addBanner', payload)
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
