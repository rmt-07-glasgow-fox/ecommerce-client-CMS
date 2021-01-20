<template>
  <div id="form-register" class="container">
    <h1>Register Form</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <input v-model="name" type="text" placeholder="Name" autofocus="autofocus" class="form-control">
      </div>
      <div class="form-group">
        <input v-model="email" type="email" placeholder="Email" autofocus="autofocus" class="form-control">
      </div>
      <div class="form-group">
        <input v-model="password" type="password" placeholder="Password" class="form-control">
      </div>
      <button class="btn btn-success" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormRegister'

}
</script>

<style>

</style>
