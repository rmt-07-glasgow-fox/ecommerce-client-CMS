<template>
<div class="edit">
<div class="container">
<div class="columns">
  <div class="column"></div>
  <div class="column is-three-fifths">
<form action="">
<div class="field">
  <!-- <label class="label">Product Name</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="edit: product name">
  </div>
</div>
<div class="field">
  <!-- <label class="label">Image Url</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="edit: image url">
  </div>
</div>
<div class="field">
  <!-- <label class="label">Price</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="edit: price">
  </div>
</div>
<div class="field">
  <!-- <label class="label">Stock</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="edit: stock">
  </div>
</div>
<button class="button is-link">Update</button>
</form>
</div>
<div class="column"></div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'editProduct'
}
</script>

<style>

</style>
