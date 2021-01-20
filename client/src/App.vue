<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style>
#app {
  height: 100vh;
  overflow: auto;
  background-image: url('./assets/live_bg3.svg');
}

::-webkit-scrollbar {
  width: 8px;
  height: 9px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: rgb(202, 188, 188);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(197, 186, 186);
}
</style>
