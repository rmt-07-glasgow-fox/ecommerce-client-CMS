<template>
  <div class="row" style="margin-top:10%">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <main class="form text-center">
      <form  v-on:submit.prevent='addBanner'>
        <h1 class="h3 mb-3 fw-normal">Add banner</h1>
        <div class="form-group">
          <label for="category">Select the status...</label>
          <select class="form-control" id="category" v-model="status">
            <option value="active">active</option>
            <option value="non-active">non-active</option>
          </select>
        </div>
        <input type="text" id="title" class="form-control" placeholder="Banner title" required autofocus v-model="title"><br>
        <input type="text" id="image_url" class="form-control" placeholder="Image Url" required v-model="imageUrl"><br>
        <button class="w-100 btn btn-lg btn-success" type="submit">Add banner</button>
      </form>
    </main>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
export default {
  name: 'AddBanner',
  data () {
    return {
      title: '',
      status: '',
      imageUrl: ''
    }
  },
  methods: {
    addBanner () {
      const { title, status, imageUrl } = this
      this.$store.dispatch('addBanner', { title, status, imageUrl })
    }
  }

}
</script>

<style>

</style>
