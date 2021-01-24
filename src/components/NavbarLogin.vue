<template>
  <div>
    <div id="nav">
      <div>
      <div class=" row d-flex justify-content-between">
        <h4 class="logo" style="color: white;"><b>Shoes Corner</b></h4>
          <div cols="8">
            <router-link to="/">Home</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarLogin'
}
</script>

<style>
#nav {
  padding: 30px;
  background-color: #222831;
}

#nav a {
  font-weight: bold;
  color: #4d6f91;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navigation {
  align-content: center;
}

.logo {
  font-family: 'fraunces', serif;
}

router-link {
  font-family: 'lato', serif;
}

</style>
