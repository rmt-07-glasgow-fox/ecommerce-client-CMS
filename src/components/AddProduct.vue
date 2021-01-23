<template>
<div class="add">
 <!-- <Navbar></Navbar> -->
<div class="container">
<div class="columns">
  <div class="column"></div>
  <div class="column is-three-fifths">
<form action="">
<div class="field">
  <!-- <label class="label">Product Name</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="product name">
  </div>
</div>
<div class="field">
  <!-- <label class="label">Image Url</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="image url">
  </div>
</div>
<div class="field">
  <!-- <label class="label">Price</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="price">
  </div>
</div>
<div class="field">
  <!-- <label class="label">Stock</label> -->
  <div class="control">
    <input class="input" type="text" placeholder="stock">
  </div>
</div>
<button class="button is-link">Submit</button>
</form>
</div>
<div class="column"></div>
</div>
</div>
</div>
</template>

<script>
// import Navbar from '../components/Navbar'
export default {
  name: 'AddProduct'
  // components: {
  //   Navbar
  // }
}
</script>

<style>

</style>
