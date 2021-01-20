<template>
<div class="home">
<div class="container">
  <div class="columns">
<div class="column is-one-third">
<p>List</p>
<p>Add</p>
</div>
<div class="column">
  <div class="table-container">
  <table class="table">
    <!-- Your table content -->
    <thead>
      <th>Product Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Image</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>
          <button class="button is-warning">Edit</button>
          <button class="button is-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'ListProduct'
}
</script>

<style>

</style>
