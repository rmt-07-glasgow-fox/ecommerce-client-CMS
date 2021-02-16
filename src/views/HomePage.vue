<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Navbar -->
      <div id="navbar" class="col col-md-1">
        <navbar></navbar>
      </div>

      <!-- Content -->
      <div id="content" class="col col-md-11">
        <div style="display: flex; height: 100vh">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'HomePage',
  components: {
    Navbar
  }
}
</script>

<style scoped>
  #navbar {
    background-color: darkslategrey;
    color: white;
  }
</style>
