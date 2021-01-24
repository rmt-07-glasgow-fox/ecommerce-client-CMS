<template>
  <div>
      <div class="d-flex">
        <div class="side-nav navbar-dark bg-dark text-light navbar position-fixed d-flex align-items-top justify-content-start flex-column" :class="{activesidebar:sidebar}">
          <SideNav/>
        </div>
        <div :class="{sidebaractive:sidebar}" class="container">
            <Navbar/>
            <div class="ml-3">
              <router-view/>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import SideNav from '../components/SideNav.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    SideNav
  },
  computed: {
    ...mapState([
      'sidebar'
    ])
  },
  created () {
    this.$store.dispatch('changePageTitle', 'dashboard')
  }

}
</script>

<style scoped>
 .container{
   margin-top: 70px;
 }
 .side-nav{
    margin-top: 50px;
    padding: 0;
    margin-left:-250px;
    width: 250px;
    height: 100vh;
    z-index: 20;
 }
 .activesidebar{
    margin-left:0px !important;
 }
.sidebaractive{
  margin-left:250px;
}
</style>
