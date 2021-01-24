<template>
  <div>
    <h1>Add Banner</h1>
    <form @submit.prevent="addBanner">
      <div class="mb-1">
        <label for="name" class="col-form-label">Banner Title</label>
        <input
          v-model="payload.name"
          type="text"
          class="form-control"
          id="name"
        />
      </div>

      <div class="mb-1">
        <label for="image_url" class="col-form-label">Image URL</label>
        <input
          v-model="payload.image_url"
          type="text"
          class="form-control"
          id="image_url"
        />
      </div>

      <div class="mt-3 mb-3">
        <button type="submit" class="btn btn-sm btn-primary">Add</button>
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
  name: 'AddBanner',
  data () {
    return {
      payload: {
        name: '',
        image_url: ''
      }
    }
  },
  methods: {
    addBanner () {
      this.$store.dispatch('addBanner', this.payload)
    }
  }
}
</script>
