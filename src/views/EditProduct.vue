<template>
  <div class='container'>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Product name..." required='' v-model='name'>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Product price..." required='' v-model='price'>
      </div>
      <div class="form-group">
        <label for='stock'>Number of stock: </label>
        <input type="text" id='stock' class="form-control" required='' v-model='stock'>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
