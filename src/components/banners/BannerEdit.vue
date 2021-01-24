<template>
  <div>
    <h1>Edit Banner</h1>
    <form @submit.prevent="updateSubmit">
      <input
        v-model="Banner.id"
        type="text"
        class="form-control"
        id="id"
        style="display: none"
      />

      <div class="mb-1">
        <label for="name" class="col-form-label">Game Title</label>
        <input
          v-model="Banner.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>

      <div class="mb-1">
        <label for="image_url" class="col-form-label">Game Title</label>
        <input
          v-model="Banner.image_url"
          type="text"
          class="form-control"
          id="image_url"
        />
      </div>

      <div class="mt-3 mb-3">
        <button type="submit" class="btn btn-sm btn-primary">Edit</button>
        <router-link
          to="/admindashboard/banners"
          style="text-decoration: none"
        >
          <button
            type="button"
            style="margin-left: 36px"
            class="btn btn-sm btn-danger"
          >
            Cancel
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditBanner',
  data () {
    return {
      payload: {
        id: '',
        name: '',
        image_url: ''
      }
    }
  },
  methods: {
    updateBanner () {
      this.$store.dispatch('updateBanner', this.payload)
    },
    fetchOneBanner () {
      this.$store.dispatch('fetchOneBanner', this.$route.params.id)
    },
    updateSubmit () {
      this.payload.id = this.Banner.id
      this.payload.name = this.Banner.name
      this.payload.image_url = this.Banner.image_url

      this.updateBanner()
    }
  },
  computed: {
    Banner () {
      return this.$store.state.banner.banner
    }
  },
  created () {
    this.fetchOneBanner()
  }
}
</script>
