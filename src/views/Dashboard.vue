<template>
<div class="row" style="height:100vh">
  <div class="col-md-2 border-right">
    <div class="container">
      <div class="row my-auto border-bottom">
        <img src="../assets/beautiv.png" alt="" style="width:100%">
      </div>
      <div style="margin-top:10%">
          <button class="btn btn-link btn-lg text-dark" @click="addProduct"> Add Product </button>
      </div>
      <div style="margin-top:10%">
          <button class="btn btn-link btn-lg text-dark" @click="addBanner"> Add Banner </button>
      </div>
      <div style="margin-top:20%">
          <button class="btn btn-danger btn-lg" @click="logout"> Logout </button>
      </div>
    </div>
  </div>
  <div class="col-md-10">
    <div class="container">
      <div class="text-center"><br>
        <h1>Dashboard</h1>
      </div><br>
      <div id="nav">
        <router-link to="/dashboard">Products</router-link> |
        <router-link to="/dashboard/banners">Banners</router-link>
      </div>
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    addProduct () {
      this.$router.push('/products/add')
    },
    addBanner () {
      this.$router.push('/banners/add')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}

</style>
