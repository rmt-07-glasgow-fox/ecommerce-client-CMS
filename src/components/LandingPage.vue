<template>
  <div class="container">
    <div class="row">
      <div class="col-7 d-flex flex-column justify-content-center align-items-center">
        <img src="../assets/002-price tag.png" alt="landing page">
      </div>
      <div class="col-5 d-flex flex-column justify-content-center align-items-start">
        <h1>{{ msg }}</h1>
        <p>Modemarkt E-commerce Content Management System</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
