<template>
  <div id="add">
    <navbar></navbar>
    <div class="bg-gray-800 rounded-lg container w-1/4 flex justify-center my-20 mx-auto h-1/2">
      <div class="p-5 w-full flex-col justify-items-center">
        <router-link
        to="/add"
        class="mx-3 text-sm font-semibold text-yellow-400"
        >add product</router-link>
        <router-link
        to="/add/category"
        class="mx-3 text-sm font-semibold text-yellow-400"
        >add category</router-link>
        <router-link
         class="mx-3 text-sm font-semibold text-yellow-400"
        to="/add/banner">add banner</router-link>
        <router-view
        class="my-8"
        ></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'AddProduct',
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style>

</style>
