<template>
  <div id="app">
    <div v-if="currentPage === 'login-page'">
      <router-view
      :currentPage="currentPage"
      @signInClicked="login"
      />
    </div>

    <div class="container" v-if="currentPage === 'products-page'">
      <div class="row">
        <div class="col-2">
          <div>
            <router-link to="/home">Home</router-link>
          </div>
          <div>
            <router-link to="/products">Products</router-link>
          </div>
          <div>
            <a href="#" @click.prevent="logout">Logout</a>
          </div>
        </div>
        <div class="col-10">
          <router-view :products="products"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eCommerceAPI from '../src/api/e-commerceAPI'

export default {
  name: 'App',
  data () {
    return {
      currentPage: '',
      products: []
    }
  },
  methods: {
    login (payload) {
      eCommerceAPI.post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.fetchProducts()
          this.goToPage('/products', 'products-page')
        })
        .catch(err => console.log(err, 'error login'))
    },
    logout () {
      localStorage.clear()
      this.goToPage('/login', 'login-page')
    },
    goToPage (pageRoute, pageName) {
      this.currentPage = pageName
      this.$router.push(pageRoute)
    },
    fetchProducts () {
      eCommerceAPI.get('/products', {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    if (localStorage.access_token) {
      this.fetchProducts()
      this.goToPage('/products', 'products-page')
    } else {
      this.goToPage('/login', 'login-page')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  word-wrap: break-word;
}
</style>
