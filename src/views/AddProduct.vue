<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <div class="d-flex justify-content-center">
        <div class="col-md-offset-5 col-md-3">
          <input v-model="data.name" type="text" id="name" class="form-control input-sm chat-input" placeholder="Name product" />
          <br>
          <input v-model="data.image_url" type="text" id="image_url" class="form-control input-sm chat-input" placeholder="Image url" />
          <br>
          <input v-model="data.price" type="number" id="price" class="form-control input-sm chat-input" placeholder="Price" />
          <br>
          <input v-model="data.stock" type="number" id="stock" class="form-control input-sm chat-input" placeholder="Stock" />
          <br>
          <div class="wrapper">
            <span class="group-btn">
              <button class="btn btn-primary" @click="addProduct" type="submit">Submit</button>
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Addproduct',
  data () {
    return {
      data: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      axios({
        method: 'POST',
        url: '/products',
        data: {
          name: this.data.name,
          image_url: this.data.image_url,
          price: this.data.price,
          stock: this.data.stock
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          console.log(this.data.name)
        })
        .catch(err =>
          console.log(err)
        )
    }
    // createData () {
    //   return axios
    //     .post('/products', this.data, {
    //       headers: {
    //         access_token: localStorage.access_token
    //       }
    //     })
    //     .then(({ data }) => {
    //       console.log(data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  },
  created () {
    this.addProduct()
    // this.createData()
  }
}
</script>

<style>
  .container{
    margin: 50px
  }
</style>
