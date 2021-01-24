<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view/>
    </vue-page-transition>
  </div>
</template>

<script>

export default {
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";

  #app {
    font-family: 'Montserrat', sans-serif;
  }
  .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
