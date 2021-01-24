<template>
  <div class="row" style="margin-top:10%">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <main class="form text-center">
      <form  v-on:submit.prevent='editBanner'>
        <h1 class="h3 mb-3 fw-normal">Edit Banner</h1>
        <div class="form-group">
          <select class="form-control" id="status" v-model="status">
            <option value="active">active</option>
            <option value="non-active">non-active</option>
          </select>
        </div>
        <input type="text" id="title" class="form-control" placeholder="Banner title" required autofocus v-model="title"><br>
        <input type="text" id="image_url" class="form-control" placeholder="Image Url" required v-model="imageUrl"><br>
        <button class="w-100 btn btn-lg btn-success" type="submit">Edit banner</button>
      </form>
    </main>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
export default {
  name: 'editBanner',
  data () {
    return {
      title: '',
      status: '',
      imageUrl: ''
    }
  },
  methods: {
    populateData () {
      this.$store.dispatch('getOneBanner', this.$route.params.id)
        .then(({ data }) => {
          this.title = data.title
          this.imageUrl = data.imageUrl
          this.status = data.status
        })
        .catch(err => console.log(err))
    },
    editBanner () {
      const id = this.$route.params.id
      const { title, status, imageUrl } = this
      this.$store.dispatch('editBanner', { title, status, imageUrl, id })
    }
  },
  created () {
    this.populateData()
  }

}
</script>

<style>

</style>
