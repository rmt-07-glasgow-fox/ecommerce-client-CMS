<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row" style="width:98%; margin-left:1%">
        <div class="col-12 bg-light rounded" style="margin-top: 10px; padding: 10px">
          <div class="row">
            <div class="col-4 offset-4">
              <h1>E-Commerce CMS</h1>
            </div>
            <div v-if="this.$route.path !== '/login'" class="col-4" style="display: flex; justify-content: flex-end">
              <button @click.prevent="logout" class="btn btn-dark" style="padding-top: 8px">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      return this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

/* #nav {
  text-align: center;
  padding: 30px;
} */

.card {
  width: 98%;
  height: 400px;
  margin: 5px
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.col-3 {
  padding: 0%;
}

.btn {
  margin-bottom: 10px;
}

</style>
