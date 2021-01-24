<template>
  <div class="container-fluid">
    <div style="text-align:center; padding-top:30px; padding-bottom: 5px;">
      <p style="font-weight:bold">@Copyright Hacktiv8 2021</p>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-light"
            href="#">
            {{copyright}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyright: 'copyright 2021 @afistapratama12'
    }
  }
}
</script>

<style>

</style>
