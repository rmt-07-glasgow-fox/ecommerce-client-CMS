<template>
  <div id="app">
    <router-view v-if="!isAuth"/>

    <div id="dashboardPage" v-if="isAuth">
      <!-- Page Wrapper -->
      <div id="wrapper">
        <Sidebar/>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

          <!-- Main Content -->
          <div id="content">
            <!-- Topbar -->
            <Header/>
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  computed: {
    ...mapState(['token']),
    ...mapGetters(['isAuth'])
  },
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
