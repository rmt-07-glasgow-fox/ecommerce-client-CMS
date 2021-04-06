<template>
  <div>
    <dashboard-navbar/>
    <dashboard-body/>
  </div>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue'
import DashboardBody from '@/components/DashboardBody.vue'

export default {
  name: 'Dashboard',
  components: {
    DashboardNavbar,
    DashboardBody
  },
  created () {
    this.$store.commit('checkAuth')
  }
}
</script>

<style>
</style>
