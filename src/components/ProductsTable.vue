<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Image Url</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Option</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><img src="https://i.pinimg.com/originals/73/59/e9/7359e96dd9a6508001bf102023ebf0a1.jpg" alt="Hanayo-Figma" height="200px"></td>
        <td>Hanayo Figma "Dareka Tasukete !!"</td>
        <td>250000</td>
        <td>999</td>
        <td>
          <div class='btn-group' role='group' aria-label='Basic example'>
            <button type='button' class='btn btn-secondary' data-toggle='modal'
            data-target='#modal-update-product'>Edit</button>
            <button type='button' class='btn btn-secondary'>Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ProductsTable'
}
</script>

<style>

  .table{
    background: white;
    padding: 10px;
  }

</style>
