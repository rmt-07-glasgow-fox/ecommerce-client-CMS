<template>
  <div class="col-2">
    <div class="container-fluid bg-light side-bar rounded shadow">
      <div class="row">
        <div class="col-12">

          <div class="d-flex justify-content-center">
            <img alt="E-commerce logo" :src="logoPic" height="150px">
          </div>
          <div class="bg-info rounded p-2 pt-3 my-2 d-flex justify-content-center">
            <router-link to="/" class="router-link"> <h4>Home</h4> </router-link>
          </div>
          <div class="bg-success rounded p-2 pt-3 my-2 d-flex justify-content-center">
            <router-link to="/products" class="router-link"> <h4>Products</h4> </router-link>
          </div>
          <div class="bg-danger rounded p-2 pt-3 my-2 d-flex justify-content-center">
            <a href="#" @click.prevent="logout" class="router-link"> <h4>Logout</h4> </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    logoPic () {
      return this.$store.state.logoPic
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.side-bar {
  display: flex;
  flex-flow: column;
  height: 100%
}
</style>
