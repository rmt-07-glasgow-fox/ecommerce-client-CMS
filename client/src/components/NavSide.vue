<template>
  <!-- Sidebar/menu -->
  <nav
    class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
    style="z-index: 3; width: 300px; font-weight: bold"
    id="mySidebar"
  >
    <br />
    <div class="w3-container">
      <h3 class="w3-padding-64">
        <b>Used<br />Aircraft</b>
      </h3>
    </div>
    <div class="w3-bar-block">
      <a
        href="#"
        onclick=""
        class="w3-bar-item w3-button w3-hover-white"
        >Home</a
      >
      <a
        href="#showcase"
        onclick=""
        class="w3-bar-item w3-button w3-hover-white"
        >Showcase</a
      >
      <a
        href="#Stocks"
        onclick=""
        class="w3-bar-item w3-button w3-hover-white"
        >Stocks</a
      >
      <a
        href="#Information"
        onclick=""
        class="w3-bar-item w3-button w3-hover-white"
        >Information</a
      >
      <a
        href="#contact"
        @click="logout"
        class="w3-bar-item w3-button w3-hover-white"
        >Logout</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavSide',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
</style>
