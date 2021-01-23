<template>
  <section>
    <div class="row">
      <div class="col-2 sidebar">
        <header>CMS</header>
        <ul>
          <li><router-link to="/"><i class="fas fa-home"></i> Dashboard</router-link></li>
          <li><router-link to="/add"><i class="fas fa-cart-plus"></i> Add Product</router-link></li>
          <li><a @click.prevent="logout" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
        </ul>
      </div>
      <div class="col-10 dashboard">
        <div class="container p-1">
          <h2>Dashboard</h2>
          <hr>
        </div>
        <div class="d-flex flex-column align-items-center scroll">
          <router-view/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.scroll {
  overflow: scroll;
  height: 85%;
}

.dashboard {
  height: 100vh;
}
/* sidebar */
.sidebar {
  background-color: rgb(31, 31, 31);
  height: 100vh;
  list-style: none;
  text-decoration: none;
}
.sidebar header {
  color: white;
  font-size: 22px;
  text-align: center;
  line-height: 70px;
  user-select: none;
}
.sidebar ul li {
  list-style: none;
}

.sidebar ul li a{
  text-decoration: none;
}
.sidebar ul {
  padding: 0;
}
.sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50px;
  font-size: 15px;
  color: white;
  padding-left: 30px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid black;
  transition: .3s;
}

.sidebar ul a:hover {
  padding-left: 40px;
}
.sidebar ul a i {
  margin-right: 10px;
}
</style>
