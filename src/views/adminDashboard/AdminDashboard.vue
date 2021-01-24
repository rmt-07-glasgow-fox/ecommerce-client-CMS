<template>
  <div id="AdminDashboard">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from '../../components/shared/Navbar.vue'

export default {
  name: 'AdminDashboard',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
    }
  },
  components: {
    Navbar
  },
  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>
