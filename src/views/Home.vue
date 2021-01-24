<template>
<div id="dashboardPage">
      <!-- Page Wrapper -->
      <div id="wrapper">
        <Sidebar />

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

          <!-- Main Content -->
          <div id="content">
            <!-- Topbar -->
            <Header/>
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">
              <Dashboard/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import Header from '@/components/Layouts/Header'
import Sidebar from '@/components/Layouts/Sidebar'

export default {
  name: 'Home',
  components: {
    Dashboard,
    Header,
    Sidebar
  }
}
</script>
