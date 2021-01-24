<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <div class="container">
                <a class="navbar-brand logo" href="#">excommerce</a>
                <ul class="navbar-nav">
                    <li class="nav-item"><button class="btn btn-success" @click.prevent="goToAddProduct">add product</button></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            hai
                        </a>
                        <div class="dropdown-menu">
                            <button class="btn text-danger"  @click.prevent="logout">Logout</button>
                    </div>
                    </li>
                </ul>
            </div>
      </nav>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can back any time to visit Us',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, i'm leaving~"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('access_token')
          this.$router.push('/')
          Swal.fire({
            icon: 'success',
            title: 'Good Bye',
            text: 'Thank you for your visit, have a nice day'
          })
        }
      })
    },
    goToAddProduct () {
      this.$router.push('/createProduct')
    }
  }
}
</script>

<style>
</style>
