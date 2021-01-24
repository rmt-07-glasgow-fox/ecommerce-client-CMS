<template>
  <div class="row">
    <div class="col-2 left-nav" style="background-color:rgba(80, 81, 82,0.5)">
      <div id="nav">
        <div style="padding:16px">
          <h3>E-Shop-E</h3>
        </div>
        <div class="links">
          <router-link to="/">Home</router-link>
        </div>
        <div class="links">
          <router-link to="/addproduct">Add Product</router-link>
        </div>
        <div style="padding:16px">
          <button v-on:click="logout" class="btn btn-outline-danger">Logout</button>
        </div>
      </div>
    </div>
    <div class="col-10">
      <div class="main container">
        <div class="row">
          <div class="col-6">
            <img :src="product.image_url" alt="picture">
          </div>
          <div class="detail col-4 border p-3">
            <h2>
              Product Details
            </h2>
            <h4>Name: {{ product.name }}</h4>
            <h4>Price: Rp {{ product.price }}</h4>
            <h4>Stock: {{ product.stock }}</h4>
            <div>
              <div class="mb-3">
                <router-link :to="`/productdetail/${$route.params.id}/addstock`" class="btn btn-outline-primary">Add Stock</router-link>
                <router-link :to="`/productdetail/${$route.params.id}/editproduct`" class="btn btn-outline-primary">Edit</router-link>
              </div>
              <button v-on:click="deleteProduct" class="btn btn-outline-primary">Delete</button>
            </div>
          </div>
        </div>
        <router-view :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'ProductDetail',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    fetchProductDetail () {
      const { id } = this.$route.params
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.product = data
        })
        .catch(err => console.log(err))
    },
    deleteProduct () {
      const { id } = this.$route.params
      this.$store.dispatch('delete', id)
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  created () {
    this.fetchProductDetail()
  }
}
</script>

<style>
.main {
  height: 100vh;
  padding-top: 50px;
}

.detail {
  text-align: left;
  font-weight: 1000;
}

.col-6 img {
  height: 300px;
  width: auto;
}

.action {
  align-items: center;
}

.left-nav{
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding-right: 0;
  padding-top: 12px;
  position: relative;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav .links {
  padding-top: 16px;
  padding-bottom: 16px;
}

#nav .links:hover:not(.active) {
  background-color: #555;
  color: white;
}

.row {
  display: flex;
  align-items: flex-start;
}
</style>
