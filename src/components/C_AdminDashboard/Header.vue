<template>
  <div class="sticky-top">
    <header class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <!-- <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">test name</a> -->
      <div class="navbar-brand col-md-3 col-lg-2 me-0 px-3">
        <img src="../../assets/img_logoLineC.png" width="128" />
      </div>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="form-control form-control-dark w-100"
        style="height: 48px"
      ></div>

      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'ADHeader',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
.navbar .navbar-toggler {
  top: 0.25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: 0.75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>
