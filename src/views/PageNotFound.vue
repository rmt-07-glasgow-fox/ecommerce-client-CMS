<template>
  <div class="page d-flex flex-column justify-content-center align-items-center">
    <h1>404 Not Found</h1>
    <h3>Cannot go to {{ $route.path }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
  .page {
    width: 100%;
    height: 100vh;
  }
</style>
