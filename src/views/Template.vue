<template>
  <div>
    <div class="row">
        <div class="col-4 offset-4 bg-light rounded" style="margin-top: 20px; margin-bottom: 20px;padding: 30px;">
          <div class="login">
                <h2 style="text-shadow: white 1px 1px;">Add Product</h2><br>
                <form @submit.prevent="addProduct">
                    <input class="rounded" type="text" placeholder="Name" v-model="name"><br><br>
                    <input class="rounded" type="text" placeholder="Image Url" v-model="image_url"><br><br>
                    <input class="rounded" type="text" placeholder="Price" v-model="price"><br><br>
                    <input class="rounded" type="text" placeholder="Stock" v-model="stock"><br><br>
                    <button class="btn btn-dark rounded" type="submit" id="login-btn">Add</button>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-4 offset-4 bg-light rounded" style="margin-top: 20px; margin-bottom: 20px;padding: 30px;">
          <div class="login">
                <h2 style="text-shadow: white 1px 1px;">Edit Product</h2><br>
                <form @submit.prevent="addProduct">
                    <input class="rounded" type="text" placeholder="Name" v-model="edit_name"><br><br>
                    <input class="rounded" type="text" placeholder="Image Url" v-model="edit_image_url"><br><br>
                    <input class="rounded" type="text" placeholder="Price" v-model="edit_price"><br><br>
                    <input class="rounded" type="text" placeholder="Stock" v-model="edit_stock"><br><br>
                    <button class="btn btn-dark rounded" type="submit" id="login-btn">Edit</button>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Template'
}
</script>

<style>

</style>
