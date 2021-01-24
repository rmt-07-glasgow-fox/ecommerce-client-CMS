<template>
    <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <div class="container">
                <a class="navbar-brand logo" href="#">excommerce</a>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Menu
                        </a>
                        <div class="dropdown-menu">
                          <router-link class="dropdown-item" to="/">Home</router-link>
                          <router-link class="dropdown-item" to="/login">Login</router-link>
                          <router-link class="dropdown-item" to="/register">Register</router-link>
                        </div>
                    </li>
                </ul>
            </div>
      </nav>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
<style>
</style>
