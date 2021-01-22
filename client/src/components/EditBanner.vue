<template>
  <form class="d-flex flex-column container" style="max-width: 500px" @submit.prevent="putBanner">
    <div class="mb-3">
      <label for="validationDefault01" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="validationDefault01"
        v-model="editBanner.title"
        required
      />
    </div>
    <div class="mb-3">
      <label for="validationDefault02" class="form-label">Image URL</label>
      <input
        type="text"
        class="form-control"
        id="validationDefault02"
        v-model="editBanner.image_url"
      />
    </div>
    <div class="mb-3 d-flex flex-column">
      <label for="validationDefault03" class="form-label">Status</label>
      <div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            v-model="editBanner.status"
            value=true
          />
          <label class="form-check-label" for="inlineRadio1">Active</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            v-model="editBanner.status"
            value=false
          />
          <label class="form-check-label" for="inlineRadio2">Inactive</label>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary my-3" type="submit">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EditBanner',
  props: ['editBanner'],
  methods: {
    putBanner () {
      this.$emit('putBanner')
    }
  },
  created () {
    this.$emit('fetchEditBanner', this.$route.params.id)
  }
}
</script>

<style>

</style>
