<template>
  <div class="row mb-3 mt-3">
    <div class="col">
      <h1 class="mb-3">Edit Banner</h1>
      <form @submit.prevent="handleEditBanner">
        <div class="form-group mt-1 row">
          <label for="input-title" class="col-sm-2 col-2 col-form-label">Title: </label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="bannerById.title" class="form-control" id="input-title" placeholder="Banner's title">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-image" class="col-sm-2 col-2 col-form-label">Image Url</label>
          <div class="col-sm-10 col-10">
            <input type="text" v-model="bannerById.image_url" class="form-control" id="input-image" placeholder="Banner's image url">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-status" class="col-sm-2 col-2 col-form-label">Status</label>
          <div class="col-sm-10 col-10">
            <b-form-checkbox v-model="bannerById.status" name="check-button" switch>
            </b-form-checkbox>
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-primary">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return { }
  },
  props: [],
  methods: {
    handleEditBanner () {
      this.$store.dispatch('handleUpdateBannerById', {
        id: this.$route.params.id,
        title: this.bannerById.title,
        imageUrl: this.bannerById.image_url,
        status: this.bannerById.status
      })
    },
    getBannerById () {
      this.$store.dispatch('getBannerById', this.$route.params.id)
    }
  },
  created () {
    this.getBannerById()
  },
  computed: {
    bannerById () {
      return this.$store.state.banner.banner
    }
  }
}
</script>

<style>

</style>
