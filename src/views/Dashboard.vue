<template>
  <div :class="['d-flex', toggled ? '' : 'toggled']" id="wrapper">
    <!-- Sidebar -->
    <div class="border-right" id="sidebar-wrapper">
      <div class="sidebar-heading border-bottom text-center">E-Commerce CMS</div>
      <div class="list-group list-group-flush border-bottom">
        <a href="#" class="list-group-item list-group-item-action"
          ><i class="fa fa-home mr-2"></i> Home</a
        >
        <a href="#" class="list-group-item list-group-item-action"
          ><i class="fa fa-picture-o mr-2"></i> Banner</a
        >
        <a href="#" class="list-group-item list-group-item-action"
          ><i class="fa fa-folder mr-2"></i> Category</a
        >
        <a href="#" class="list-group-item list-group-item-action"
          ><i class="fa fa-product-hunt mr-2"></i> Product</a
        >
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <a class="text-right" href="#" @click="toggled = !toggled"
          ><i :class="['fa', toggled ? 'fa-toggle-on' : 'fa-toggle-off']" aria-hidden="true"></i
        ></a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="logout" href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid">
        <h1 class="mt-4">Home</h1>
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      toggled: true,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/login');
    },
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
