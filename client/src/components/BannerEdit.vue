<template>
  <div id="banneradd">
    <h1>BANNER EDIT</h1>
    <form @submit.prevent="editBanner">
      <div class="mb-3">
        <label for="title" class="form-label">Banner Category:</label>
        <input v-model="newBanner.title" type="text" class="form-control" id="title" placeholder="Electronic">
      </div>
      <div class="mb-3">
        <label for="imageurl" class="form-label">Image Url:</label>
        <input v-model="newBanner.image_url" type="text" class="form-control" id="imageurl" placeholder="Image Url">
      </div>
      <button type="submit" class="btn btn-primary"><i class="fas fa-plus"> Add</i></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BannerEdit',
  data () {
    return {
      newBanner: {
        title: '',
        image_url: ''
      }
    }
  },
  methods: {
    editBanner () {
      const { id } = this.$route.params
      const payload = {
        id,
        data: this.newBanner
      }
      this.$store.dispatch('editBanner', payload)
    },
    getDataBanner () {
      const { id } = this.$route.params
      this.$store.dispatch('getDataBanner', id)
        .then(({ data }) => {
          this.newBanner.title = data.title
          this.newBanner.image_url = data.image_url
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.getDataBanner()
  }
}
</script>

<style>

</style>
