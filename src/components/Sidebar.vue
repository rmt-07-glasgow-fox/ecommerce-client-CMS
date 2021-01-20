<template>
  <div class="sidebar">
    <div class="container bg-light p-3">
      <h3>Welcome Admin!</h3>
      <div style="display: flex; justify-content: center;">
        <img class="mr-3" height="180px" width="180px" :src="randomAvatarUrl">
      </div>
    </div>
    <ul>
      <li class="list">
        <router-link to="products">Products</router-link>
      </li>
    </ul>
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
    text-decoration: none;
    background-color: #262833;
    height: 100vh;
    width: 100%;
    box-shadow: rgba(0,0,0,0.04) 0 2px 6px 0;
  }
  .list {
    color: white;
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: bold;
    list-style-type: none;
  }
  .list a:hover {
    text-decoration: none;
  }
</style>
