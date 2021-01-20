<template>
  <!-- ADD PRODUCT -->
  <div id="addTask" class="container">
    <div class="row justify-content-center">
      <div class="col-6 m-3">
        <form>
          <input type="text" v-model="name" placeholder="Name" size="50">
          <input type="text" v-model="image_url" placeholder="Image URL" size="50">
          <input type="number" v-model="price" placeholder="Price in Rupiah" size="50">
          <input type="number" v-model="stock" placeholder="Stock" step="1" size="50">
          <div>
            <button type="submit" class="btn btn-primary my-3" v-on:click.prevent="addProduct">Add</button>
          </div>
        </form>
        <div id="formFooter">
          <a id="" href="#" v-on:click.prevent="back">Cancel</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/dashboard')
    },
    addProduct () {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: this.name,
          image_url: this.image_url,
          price: +this.price,
          stock: +this.stock
        }
      })
        .then((response) => {
          console.log(response.data.message)
          this.$store.dispatch('fetchProducts')
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    }
  }
}
</script>

<style>
input {
  text-align: center;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>
