<template>
<div class="page">
  <div style="width:100%; height: 7vh; display:flex; justify-content: center; flex-direction: column">
    <h1 style="text-align: center; color: white; font-size: 72px; padding-top: 10%">GARDARA</h1>
    <p style="text-align: center; color:white">- Be First, Be Different, Be Unique -</p>
  </div>
 <div class="my-container">
    <h1 style="text-align: center">LOGIN</h1>
    <br>
    <div class="d-flex align-items-center" style=" flex-direction: column;">
      <div class="col-4">
        <form>
      <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="text-align: center" v-model="user.email">
        <div style="text-align: center">
        <small id="emailHelp" class="form-text text-muted" >We'll never share your email with anyone else.</small>
        </div>
      </div>
      <br>
      <div class="form-group">
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="text-align: center" v-model="user.password">
      </div>
      <br>
      <div style="text-align: center">
      <button type="submit" class="btn btn-primary" @click.prevent="loginCommerce">Login</button>
      </div>
    </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginCommerce () {
      this.$store.dispatch('loginCommerce', this.user)
    }
  }
}
</script>

<style scoped>
.page {
  background-color: #2d4e66;
  font-family: 'Montserrat';
}
.my-container {
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 20vh;
  background-color: #DBCFAB;
}
</style>
