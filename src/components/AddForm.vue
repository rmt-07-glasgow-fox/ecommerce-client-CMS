<template>
  <div class="row">
    <div class="col-4 offset-4 bg-light rounded" style="margin-top: 0px; margin-bottom: 20px;padding: 30px;">
      <div class="addProduct">
        <form @submit.prevent="addProduct">
          <input class="rounded" type="text" placeholder="Name" v-model="name"><br><br>
          <input class="rounded" type="text" placeholder="Image Url" v-model="image_url"><br><br>
          <input class="rounded" type="text" placeholder="Price" v-model="price"><br><br>
          <input class="rounded" type="text" placeholder="Stock" v-model="stock"><br><br><br>
          <button class="btn btn-dark rounded" type="submit">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'AddForm',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  props: ['changePage'],
  methods: {
    addProduct () {
      console.log('masuk add product')
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.changePage('productList')
          return this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
