<template>
  <div>
    <form class="row g-3">
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Name">
      </div>
      <div class="col-md-6">
        <input type="number" class="form-control" placeholder="Status">
      </div>
      <div class="col-12">
        <input type="text" class="form-control" placeholder="Image Url">
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-outline-primary">Add</button>
        <button @click="closeAdd" class="btn btn-outline-secondary mx-2">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormAddBanner'
}
</script>

<style>

</style>
