<template>
  <div>
    <a-d-header />

    <div class="container-fluid">
      <div class="row">
        <a-d-sidebar />

        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ADHeader from '../components/C_AdminDashboard/Header.vue'
import ADSidebar from '../components/C_AdminDashboard/Sidebar.vue'

export default {
  name: 'AdminDashboard',
  components: {
    ADHeader,
    ADSidebar
  }
}
</script>
