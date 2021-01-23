<template>
  <div class="home">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      page: ''
    }
  }
}
</script>

<style scoped>

</style>
