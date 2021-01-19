<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Modemarkt</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-2">
              <router-link to="/" class="text-decoration-none text-dark"
                >Home</router-link
              >
            </li>
            <li class="nav-item mx-2">
              <router-link
                to="/products"
                class="text-decoration-none text-dark"
                >Products
              </router-link>
            </li>
            <li class="nav-item mx-2" >
              <router-link
                to="/login"
                class="text-decoration-none text-dark"
                >Login
              </router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link
                to="/logout"
                class="text-decoration-none text-dark"
                >Logout
              </router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <router-view
    @login="login"
    @deleteProduct="deleteProduct"
    :productList="productList"/>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from './api/axios'
import Swal from 'sweetalert2'

export default {
  name: 'App',
  data () {
    return {
      productList: []
    }
  },
  methods: {
    login (loginData) {
      console.log(loginData)
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: loginData.email,
          password: loginData.password
        }
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.access_token = data.access_token
        })
        .catch((error) => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    },
    getProducts () {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.productList = data
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    },
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return axios({
              url: '/products/' + id,
              method: 'DELETE',
              headers: {
                access_token: localStorage.access_token
              }
            })
          }
        })
        .then(({ data }) => {
          console.log(data)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getProducts()
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
