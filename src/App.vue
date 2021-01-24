<template>
  <div id="app">
    <navbar-dashboard v-if="currentPage === 'dashboard'" ></navbar-dashboard>
    <navbar-login v-if="currentPage === 'login'"></navbar-login>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import NavbarLogin from './components/NavbarLogin'
import NavbarDashboard from './components/NavbarDashboard'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    NavbarLogin,
    NavbarDashboard
  },
  computed: {
    ...mapState([
      'currentPage'
    ])
  },
  methods: {
    changePage (route) {
      this.$store.commit('changePage', route)
    }
  },
  created () {
    if (localStorage.access_token) this.changePage('dashboard')
    this.changePage('login')
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d6f91;

}
body {
  background-color: #eeeeee;
}
</style>
