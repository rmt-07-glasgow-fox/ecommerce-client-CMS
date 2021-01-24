<template>
  <div id="app">
    <transition name="moveInUp">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      contents: []
    }
  },
  methods: {
    fetchContent () {
      this.$store.dispatch('fetchContent')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.moveInUp-enter-active{
  animation: fadeIn 0.5s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
</style>
