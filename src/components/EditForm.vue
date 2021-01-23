<template>
  <div class="row">
    <div class="col-4 offset-4 bg-light rounded" style="margin-top: 20px; margin-bottom: 20px;padding: 30px;">
      <div class="addForm">
        <form @submit.prevent="addProduct">
          <input class="rounded" type="text" v-model="editName"><br><br>
          <input class="rounded" type="text" v-model="editImage_url"><br><br>
          <input class="rounded" type="text" v-model="editPrice"><br><br>
          <input class="rounded" type="text" v-model="editStock"><br><br><br>
          <button class="btn btn-dark rounded" type="submit">Edit</button>
        </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      editName: '',
      editImage_url: '',
      editPrice: '',
      editStock: ''
    }
  },
  computed: {
    productDetail () {
      console.log('masuk computed')
      return this.$store.state.productDetail
    }
  }
}
</script>

<style>

</style>
