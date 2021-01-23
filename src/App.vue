<template>
  <v-app>
  <!-- Sizes your content based upon application components -->
  <v-main
    class="login"
    v-if="this.$route.name === 'Login'"
  >

    <!-- Provides the application the proper gutter -->
    <v-container
      fluid
    >

      <!-- If using vue-router -->
      <router-view>
        <!-- <Home></Home>
        <About></About> -->
      </router-view>
    </v-container>
  </v-main>
  <v-main
    class="home-banner"
    v-else
  >
    <!-- Provides the application the proper gutter -->
    <v-container
      fluid
    >

      <!-- If using vue-router -->
      <router-view>
        <!-- <Home></Home>
        <About></About> -->
      </router-view>
    </v-container>
  </v-main>
</v-app>

</template>

<script>
// import Navbar from './components/Navbar'
// import About from './views/About'
export default {
  name: 'App',
  components: {
    // Navbar
  }
}
</script>
<style>
  .login {
    background-image: url(https://camiewritesblog.files.wordpress.com/2016/03/ecom.gif);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    margin: 0;
  }
  router-view {
    background-color: black;
  }
  .home-banner {
    background: #2b5876;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;
    height: 100%;

  }
</style>
