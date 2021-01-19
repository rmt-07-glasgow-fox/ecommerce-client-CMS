<template>
<div class="d-flex flex-column text-light p-2 w-20">
  <div class="logo p-3">
    <img class="icon-size" src="../assets/logo.png" alt="">
    <span class="mx-3">Hacktiv CMS</span>
  </div>
  <div class="mt-2">
    <!-- <router-link>
      <div class="d-flex justify-content-start align-items-end p-2 mt-2 rounded">
        <span>
          <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </span>
        <span class="align-text-bottom mx-3">Dashboard</span>
      </div>
    </router-link> -->
    <router-link to="/products" class="router">
      <div class="d-flex justify-content-start align-items-end p-2 mt-2 rounded">
        <span>
          <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </span>
        <span class="align-text-bottom mx-3">Products</span>
      </div>
    </router-link>
    <router-link to="/banner" class="router">
      <div class="d-flex justify-content-start align-items-end p-2 mt-2 rounded">
        <span>
          <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
          </svg>
        </span>
        <span class="align-text-bottom mx-3">Banners</span>
      </div>
    </router-link>
    <div @click="handleLogout" class="d-flex justify-content-start align-items-end p-2 mt-2 rounded" type="button" >
      <span>
        <svg class="icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </span>
      <span class="align-text-bottom mx-3">Logout</span>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    handleLogout () {
      this.$emit('handleLogout')
    }
  }

}
</script>

<style scoped>
.w-20 {
  width: 20%;
}
.icon-size {
  width: 2rem;
  height: 2rem;
}

.icon-svg {
  width: 2rem;
  height: 2rem;
}
.logo {
  border-bottom: 1px solid;
}

.router {
  text-decoration: none;
  color: white;
}
/* .fade-enter-active,
.fade-leave-active {
  transition: 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
