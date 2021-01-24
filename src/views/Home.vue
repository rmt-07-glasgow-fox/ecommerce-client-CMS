<template>
  <div class="home" style="height: 100vh; margin-top:5%;">
  <div class="row">
    <div class="col-md-6">
      <img src="../assets/undraw_co-working_825n.svg" width="80%">
    </div>
    <div class="col-md-6">
      <div style="margin-top:10%">
        <h1 class="display-2 ">CMS</h1>
        <h1 class="display-1" style="color:pink">Beautiv</h1>
        <footer class="blockquote-footer">Only can be accessed by <cite title="Source Title">Admin</cite></footer><br>
        <button class="btn btn-primary" @click="login">Login as Admin</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
