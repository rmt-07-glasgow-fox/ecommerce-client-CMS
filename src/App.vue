<template>
  <div id="app">
    <router-view @login="login" :items="items" @logout="logout" @fetchAllData="fetchAllData"
    @create="create"
    @getEdit="getEdit"
    :product="product"
    @edit="edit"
    @destroy="destroy"
    :loginErr="loginErr"
    ></router-view>
  </div>
</template>

<script>
import axios from './api/axios'

export default {
  name: 'App',
  data () {
    return {
      items: [],
      product: {
        id: 0,
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      },
      loginErr: ''
    }
  },
  components: {
  },
  methods: {
    login (user) {
      const obj = {
        email: user.email,
        password: user.password
      }
      axios
        .post('/login', obj)
        .then(response => {
          console.log(response)
          localStorage.setItem('access_token', response.data.access_token)
          this.loginErr = ''
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err.response)
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              console.log(temp)
              const str = temp.join(', ')
              this.loginErr = str
            } else if (msg.length <= 1) {
              this.loginErr = msg[i]
            }
          }
        })
    },
    logout () {
      localStorage.clear()
      this.loginErr = ''
      this.$router.push('/')
    },
    fetchAllData () {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products', { headers })
        .then(response => {
          console.log(response)
          this.items = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    create (item) {
      const obj = {
        name: item.name,
        image_url: item.image_url,
        price: item.price,
        stock: item.stock
      }
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/products', obj, { headers })
        .then(response => {
          console.log(response.data)
          this.loginErr = ''
          this.$router.push('/products')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              console.log(temp)
              const str = temp.join(', ')
              this.loginErr = str
            } else if (msg.length <= 1) {
              this.loginErr = msg[i]
            }
          }
        })
    },
    getEdit (id) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get(`/products/${id}`, { headers })
        .then(response => {
          console.log(response)
          this.product.id = response.data.id
          this.product.name = response.data.name
          this.product.image_url = response.data.image_url
          this.product.price = response.data.price
          this.product.stock = response.data.stock
          this.loginErr = ''
          this.$router.push(`/products/${response.data.id}`)
        })
        .catch(err => {
          console.log(err)
        })
    },
    edit (id) {
      const obj = {
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      const headers = { access_token: localStorage.access_token }

      axios
        .put(`/products/${id}`, obj, { headers })
        .then(response => {
          this.loginErr = ''
          this.$router.push('/products')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              console.log(temp)
              const str = temp.join(', ')
              this.loginErr = str
            } else if (msg.length <= 1) {
              this.loginErr = msg[i]
            }
          }
        })
    },
    destroy (id) {
      const headers = { access_token: localStorage.access_token }
      axios
        .delete(`/products/${id}`, { headers })
        .then(response => {
          this.fetchAllData()
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
