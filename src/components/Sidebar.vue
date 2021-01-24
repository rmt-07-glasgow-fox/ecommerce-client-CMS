<template>
<div class="col-2 p-0">
  <div class="sidebar">
    <div class="row bg-secondary">
      <div class="col-12">
        <div class="container mt-4 d-flex justify-content-center">
          <img :src="randomAvatarUrl" width="150px" height="150px">
        </div>
      </div>
      <div class="col-12">
        <div class="container mt-2 d-flex justify-content-center">
          <h4 class="text-light">Welcome Admin!</h4>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { AvatarGenerator } from 'random-avatar-generator'

const generator = new AvatarGenerator()

export default {
  data () {
    return {
      randomAvatarUrl: generator.generateRandomAvatar()
    }
  }
}
</script>

<style>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: rgb(41,51,58);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
}
</style>
