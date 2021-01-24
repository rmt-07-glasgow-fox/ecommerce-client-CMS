<template>
    <div id="nav" class="bg-gray-800 sticky m-0 p-0 top-0 w-auto flex flex-row justify-between">
        <div class="p-5">
          <span class="font-bold uppercase text-green-400 text-lg mr-10">Tokosidia CMS</span>
          <router-link to="/products"><span class="font-bold text-white mx-5">Products</span></router-link>
          <router-link to="/banners"><span class="font-bold text-white mx-5">Banners</span></router-link>
        </div>
        <div class="p-5">
          <router-link to="/add" class="mx-2"><button class="bg-green-400 p-1 rounded w-20 text-white font-semibold focus:outline-none">Add</button></router-link>
          <button @click="logout"
          class="bg-yellow-400 rounded mx-2 p-1 text-gray-800 w-20 font-semibold focus:outline-none">Logout</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
