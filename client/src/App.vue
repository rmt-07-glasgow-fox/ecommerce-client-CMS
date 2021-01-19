<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view/>
    </vue-page-transition>
    <LoginPage
      v-if="currentPage == 'LoginPage'"
    ></LoginPage>
    <Home
      v-if="currentPage == 'Home'"
    ></Home>
    <EditPage
      v-if="currentPage == 'EditPage'"
    ></EditPage>
    <AddProductPage
      v-if="currentPage == 'AddProductPage'"
    ></AddProductPage>
  </div>
</template>

<script>
import axios from './api/axios'
import Home from './views/Home'
import EditPage from './views/EditPage'
import LoginPage from './views/LoginPage'
import AddProductPage from './views/AddProductPage'

export default {
  data () {
    return {
      currentPage: 'EditPage',
      products: []
    }
  },
  components: {
    Home,
    EditPage,
    LoginPage,
    AddProductPage
  },
  methods: {
    login (email, password) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: email,
          password: password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchProduct () {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          this.products = data
        })
        .catch(error => {
          console.log(error)
        })
    },
    editProduct (id, name, price, stock, imageUrl) {
      axios({
        method: 'PUT',
        url: '/products/' + id,
        data: {
          name: name,
          price: price,
          stock: stock,
          imageUrl: imageUrl
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addProduct (name, price, stock, imageUrl) {
      axios({
        method: 'POST',
        url: '/products',
        data: {
          name: name,
          price: price,
          stock: stock,
          imageUrl: imageUrl
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

  #app {
    font-family: 'Montserrat', sans-serif;
  }
  .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
