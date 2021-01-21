<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand nav-link" to="/">Dashboard</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products/add">add product</router-link>
          </li>
                    <li class="nav-item">
            <router-link class="nav-link" to="/admin/products/3">edit product</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logout">logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
