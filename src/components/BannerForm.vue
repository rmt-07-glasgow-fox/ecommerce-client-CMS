<template>
  <div class="pt-4">
    <b-form>
      <b-form-group>
        <label class="float-left" for="product-name">
          <strong>Banner title</strong>
        </label>
        <b-form-input
          type="text"
          id="product-name"
          autocomplete="off"
          v-model="banner.title"
          placeholder="Enter your banner title...">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <label class="float-left">
          <strong>Image URL</strong>
        </label>
        <b-form-input
          type="text"
          autocomplete="off"
          v-model="banner.image_url"
          placeholder="Enter your image url">
        </b-form-input>
      </b-form-group>

      <button class="btn btn-success w-100 mb-3"
        v-if="state === 'editPage'"
        @click.prevent="updateBanner('updateBanner')">Update
      </button>

      <button class="btn btn-primary w-100 mb-3"
        @click.prevent="updateBanner('addNewBanner')"
        v-else>Add
      </button>

      <router-link
        :to="'/banners'"
        class="btn btn-danger w-100">
        Cancel
      </router-link>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'BannerForm',
  methods: {
    updateBanner (params) {
      this.$store.dispatch(params, this.banner)
    }
  },
  props: ['banner', 'state']
}
</script>

<style>

</style>
