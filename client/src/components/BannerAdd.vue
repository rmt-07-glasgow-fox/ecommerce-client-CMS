<template>
  <div id="banneradd">
    <h1>BANNER ADD</h1>
    <form @submit.prevent="addBanner">
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
  name: 'BannerAdd',
  data () {
    return {
      newBanner: {
        title: '',
        image_url: ''
      }
    }
  },
  methods: {
    addBanner () {
      const payload = this.newBanner
      this.$store.dispatch('addBanner', payload)
    }
  }
}
</script>

<style>

</style>
