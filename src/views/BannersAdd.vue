<template>
  <div class="vh-100 vw-100 bg-info">
    <NavigationBar/>
    <div class="container text-center">
      <div class="card">
        <form @submit.prevent="addNewBanner">
          <h4>New Banner</h4>
          <div class="form-group">
            <label>Title</label>
            <input
              v-model="inputNewBanner.title"
              type="text"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Image Url</label>
            <input
              v-model="inputNewBanner.image_url"
              type="text"
              class="form-control"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button @click="cancel" class="btn btn-danger">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'

export default {
  data () {
    return {
      inputNewBanner: {
        title: '',
        image_url: ''
      }
    }
  },
  components: {
    NavigationBar
  },
  methods: {
    async addNewBanner () {
      console.log('>>> new product ', this.inputNewBanner)
      const { title, image_url} = this.inputNewBanner
      const newBanner = {
        title: title,
        image_url: image_url
      }

      await this.$store.dispatch('addBanner', newBanner)
      this.$router.push('/banners')
    },
    cancel () {
      this.$router.push('/banners')
    }
  }
}
</script>
