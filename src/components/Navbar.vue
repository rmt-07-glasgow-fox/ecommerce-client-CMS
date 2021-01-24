<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container-fluid justify-content-evenly">
      <router-link class="navbar-brand col-3" to="/admin">E-commerce CMS</router-link>
      <div class="col-3" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products/add"><i>add product</i></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logout"><i>logout</i></a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      swal({
        title: 'Are you sure you want to logout?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$store.dispatch('logout')
            this.$router.push({ name: 'Login' })
            swal('You have been successfully logged out', {
              icon: 'success'
            })
          }
        })
    }
  }
}
</script>

<style>
.navbar {
  min-height: 100px;
}
.navbar-brand {
  margin-left: 40px;
  justify-content: center;
}
i {
  font-style: normal;
  font-size: 20px;
  color: rgb(41, 41, 41);
}
.nav-link {
  margin-right: 30px;
}
#navbarNav {
  display: flex;
  justify-content: center;
}
</style>
