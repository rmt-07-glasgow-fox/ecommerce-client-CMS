<template>
    <div>
      <div class="row mx-2">
          <side-bar class="mt-4"></side-bar>

          <div class="col-10 mt-4">
            <div>
              <div class="text-white mt-4 ml-5">
                <h1>Products</h1>
              </div>
              <div class="container-fluid">
                <div class="row justify-content-end my-1 mt-3">
                  <div class="col-3 mb-4">
                    <button class="btn btn-primary btn-lg" @click="addProduct">Add Product</button>
                  </div>
                </div>

                <router-view class="m-1 col-12"
                />

              </div>
            </div>
          </div>
        </div>

      <div class="row" style="height: 10vh">

      </div>
    </div>

</template>

<script>
import SideBar from '../components/SideBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Products',
  components: {
    SideBar
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    addProduct () {
      if (localStorage.role === 'admin') {
        this.$router.push('/products/add')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You do not have access'
        })
      }
    }
  },
  computed: {
    logoPic () {
      return this.$store.state.logoPic
    }
  },
  created () {
    this.fetchProducts()
  },
  updated () {
    this.fetchProducts()
  }
}

</script>

<style>
.router-link {
  text-decoration: none;
  color: white;
}
</style>
