<template>
  <div>
    <!-- <div class="background-image">
      <img src="./assets/blue-wallpaper.jpg" alt="" width="100%">
    </div> -->
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  word-wrap: break-word;
}

.router-link {
  text-decoration: none;
}

.background-image {
  background-image: url('./assets/blue-wallpaper.jpg');
  background-size: cover;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  background-repeat: repeat;
  background-attachment: fixed;
}

.background-image::before {
  content: "";
  position: fixed;
  opacity: 1;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.2);
}
.transparent {
  height: 90%;
  width: 90%;
  background: rgba(265, 265, 265, 0.65);
}
</style>
