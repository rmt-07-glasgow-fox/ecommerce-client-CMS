<template>
   <div class="my-container">
    <h1 style="text-align: center">Add Banner</h1>
    <br>
    <div class="d-flex align-items-center" style=" flex-direction: column;">
      <div class="col-4">
        <form>
      <div class="form-group">
        <input type="text" class="form-control" id="add-name" placeholder="Title" style="text-align: center" v-model="newBanner.title" required>
      </div>
      <br>
      <div class="form-group">
        <label for="bannerStatus">Status</label>
        <select class="form-control" id="bannerStatus" v-model="newBanner.status">
          <option>carousel</option>
          <option selected>banner-top</option>
        </select>
      </div>
      <br>
      <form enctype="multipart/form-data">
        <div class="form-group">
          <p style="text-align: center; margin-bottom: 0">Banner Image (max. 5Mb)</p>
          <input type="file" class="form-control" ref="file">
        </div>
      </form>
      <br>
      <div style="display:flex; justify-content: center">
        <button type="submit" class="btn btn-primary" @click.prevent="onSelect">Add Banner</button> <button type="submit" class="btn btn-danger" @click.prevent="goToDashboard">Cancel</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBanner',
  data () {
    return {
      newBanner: {
        title: '',
        status: 'False'
      }
    }
  },
  methods: {
    onSelect () {
      const file = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', file)
      try {
        console.log('MASUK')
        localStorage.setItem('title', this.newBanner.title)
        localStorage.setItem('status', this.newBanner.status)
        this.$store.dispatch('addNewBannerImage', formData)
      } catch (err) {
        console.log(err, 'gagal')
      }
    },
    goToDashboard () {
      this.$router.push('/dashboard')
    }
  },
  created () {
    this.$store.commit('checkAuth')
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
