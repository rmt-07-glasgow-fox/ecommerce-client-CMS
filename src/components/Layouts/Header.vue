<template>
  <!-- Topbar -->
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
        <div class="topbar-divider d-none d-sm-block"></div>

        <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow">
            <a class="dropdown-item" type="button" @click.prevent="logout">
              <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout
            </a>
        </li>
    </ul>
  </nav>
  <!-- End of Topbar -->
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.state.token = localStorage.getItem('token')
      this.$router.push('/login')
    }
  }
}

</script>
