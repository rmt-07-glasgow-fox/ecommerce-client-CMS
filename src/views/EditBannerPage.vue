<template>
  <div class="border p-5 m-auto">
    <div>
      <h1><strong>Update banner</strong></h1>
    </div>
    <banner-form
      :banner="banner"
      :state="state">
    </banner-form>
    <!-- <div class="pt-4">
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
        <button class="btn btn-primary w-100 mt-3 mb-3"
          @click.prevent="addBanner">Add
        </button>

        <router-link
          :to="'/banners'"
          class="btn btn-danger w-100">
          Cancel
        </router-link>
      </b-form>
    </div> -->
  </div>
</template>

<script>
import BannerForm from '../components/BannerForm'
export default {
  name: 'EditBannerPage',
  data () {
    return {
      state: 'editPage'
    }
  },
  components: {
    BannerForm
  },
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner', this.$route.params.id)
    }
  },
  created () {
    this.fetchBanner()
  },
  computed: {
    banner () {
      return this.$store.state.banner
    }
  }
}
</script>

<style>

</style>
