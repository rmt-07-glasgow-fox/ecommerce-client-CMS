<template>
  <div>
    <nav id = "navbar" class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" >
      <a class="navbar-brand" href="#">E-Commerce</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="">
              <i class="fa fa-home"></i>
              Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/addProduct">
              <i class="fa fa-plus-square-o"></i>
              Add Product
            </a>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> -->
        <button @click.prevent="logout" id="logout-btn" type="button" class="btn btn-light">Logout</button>
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
<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

#navbar {
  width: 100%;
}
.navbar-icon-top .navbar-nav .nav-link > .fa {
  position: relative;
  width: 36px;
  font-size: 24px;
}

.navbar-icon-top .navbar-nav .nav-link > .fa {
  top: 3px;
  line-height: 12px;
}

#logout-btn {
    margin-left: 10px;
}
</style>
