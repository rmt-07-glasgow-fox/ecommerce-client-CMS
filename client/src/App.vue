<template>
  <div id="app">
    <router-view
      :getProducts="getProducts"
      :products="products"
      :productToEdit="productToEdit"
      @handleLogout="handleLogout"
      @addProduct="addProduct"
      @getProductId="getProductId"
      @editProduct="handleEditProduct"
      @deleteProduct="deleteProduct"
    />
  </div>
</template>

<script>
import axios from './api/axios'

export default {
  data () {
    return {
      products: [],
      productToEdit: {}
    }
  },
  methods: {
    // handleLogin (payload) {
    //   console.log(payload)
    //   axios({
    //     method: 'POST',
    //     url: '/login',
    //     data: {
    //       email: payload.email,
    //       password: payload.password
    //     }
    //   }).then(res => {
    //     console.log(res.data)
    //     this.user = {}
    //     localStorage.setItem('access_token', res.data.access_token)
    //     this.$router.push('/products')
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
    handleLogout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    getProducts () {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        console.log(res.data)
        this.products = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    addProduct (payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: accessToken
        },
        data: payload
      }).then(res => {
        console.log(res.data)
        this.getProducts()
      }).catch(err => {
        console.log(err)
      })
    },
    getProductId (id) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        console.log(res.data)
        this.productToEdit = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    handleEditProduct (payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          iamge_url: payload.iamge_url,
          price: payload.price,
          stock: payload.stock,
          description: payload.description
        }
      }).then(res => {
        console.log(res.data)
        this.getProducts()
      }).catch(err => {
        console.log(err)
      })
    },
    deleteProduct (id) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        console.log(res.data)
        this.getProducts()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  overflow: auto;
  background-image: url('./assets/live_bg3.svg');
}

::-webkit-scrollbar {
  width: 8px;
  height: 9px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: rgb(202, 188, 188);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(197, 186, 186);
}
</style>
