<template>
  <div class="row mb-3 mt-3">
    <div class="col">
      <h1 class="mb-3">Add Banner</h1>
      <form @submit.prevent="handleAddNewBanner">
        <div class="form-group mt-1 row">
          <label for="input-title" class="col-sm-2 col-2 col-form-label">Title: </label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="title" class="form-control" id="input-title" placeholder="Banner's title">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-image" class="col-sm-2 col-2 col-form-label">Image Url</label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="imageUrl" class="form-control" id="input-image" placeholder="Banner's image url">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-status" class="col-sm-2 col-2 col-form-label">Status</label>
          <div class="col-sm-10 col-10">
            <b-form-checkbox v-model="status" name="check-button" switch>
            </b-form-checkbox>
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNewBanner',
  data () {
    return {
      title: '',
      imageUrl: '',
      status: true
    }
  },
  methods: {
    handleAddNewBanner () {
      const { title, imageUrl, status } = this
      this.$store.dispatch('handleAddBanner', {
        title,
        image_url: imageUrl,
        status
      })
      this.title = ''
      this.imageUrl = ''
      this.status = ''
    }
  }
}
</script>

<style>

</style>
