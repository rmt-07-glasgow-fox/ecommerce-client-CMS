<template>
  <nav id="navbar">
      <div id="logo-navbar">E-Commerce</div>
      <ul class="navbar-ul">
        <li>
          <router-link :to="'/'"></router-link>
        </li>
        <li>
          <button  id="productFrom" class="content-btn">Add Product</button>
        </li>
      </ul>
      <ul class="navbar-ul">
        <li>name</li>
        <li>
          <button id="logout-btn" v-on:click="logout">Logout</button>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    dashboard: function () {
      this.$router.push('/products')
    },
    logout: function () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
#navbar {
  background-color: rgb(51, 51, 51);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 1%;
}

li, button {
  font-weight: 500;
  font-size: 16px;
  color: whitesmoke;
  text-decoration: none;
}

.content-btn {
  background: transparent;
  border: none;
}

.navbar-ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.navbar-ul li {
  display: inline-block;
  padding: 0px 20px;
}

button {
  background-color: rgb(71, 71, 71);
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 10px;
  border-color: rgb(71, 71, 71);
}

#logout-btn:hover {
  transition: all 0.3s ease 0s;
  background-color: rgba(194, 58, 58, 0.8);
  border: 1px solid rgba(194, 58, 58, 0.8);
}

#logo-navbar {
  color: white;
  font-size: 25px;
}
</style>
