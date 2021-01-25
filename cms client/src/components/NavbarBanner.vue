<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button class="btn btn-sg btn-success" @click.prevent="toMaterial">MATERIAL</button>
      </li>
      <li class="nav-item active">
        <button class="btn btn-sg btn-info" @click.prevent="toAdd">ADD BANNER</button>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-danger my-2 my-sm-0" @click.prevent="logout">LOGOUT</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarBanner',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    toAdd () {
      this.$router.push('/addBanner')
    },
    toMaterial () {
      this.$router.push('/material')
    }
  }
}
</script>

<style scoped>
button {
    margin-left: 10px;
    margin-right: 10px;
}

.category-option {
  padding-top: 8px;
  padding-left: 10px;
}
</style>
