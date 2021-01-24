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
              <section class="content-header">
                  <h1>
                      Manage Categories
                  </h1>
              </section>

              <section class="content">
                  <div class="row">
                      <router-view />
                  </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'CategoryIndex',
  components: {
    Header,
    Sidebar
  }
}
</script>
