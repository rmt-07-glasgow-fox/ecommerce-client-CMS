<template>
<div class="row container mt-5">
  <div class="col-md-4">
  <br><br><br>
    <img width="350" height="350" src="https://www.upgwholesale.com/downloads/image_library/Watches/GIFs/Relativity_animation_0219.gif" alt="" srcset="">
  </div>
  <div class="col-md-4 mt-5">
    <br><br><br>
    <b class="h1">LOGIN</b>
    <br>
    <form @submit.prevent="login">
    <div class="form-group">
      <br>
      <input type="email" class="form-control" required v-model="email" placeholder="Enter email">
      <br>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" required v-model="password" placeholder="Password">
      <br>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: 0
    }
  },
  methods: {
    login () {
      const payload = { email: this.email, password: this.password }
      this.$store.dispatch('login', payload)
        .then(data => {
          console.log(data, 'romi')
          if (!data) {
            this.error++
          }
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    error  (payload) {
      if (this.error === 1) {
        console.log(payload, 'masuk watcher')
        Swal.fire({
          title: 'Who Are You?!',
          text: 'Your Password/Email were wrong',
          imageUrl: 'https://i.pinimg.com/originals/9a/55/cf/9a55cfbe6d0b89f06c4daa673b765ce3.gif',
          imageWidth: 400,
          imageHeight: 230,
          imageAlt: 'Custom image'
        })
        this.error = 0
      }
    }
  }
}
</script>

<style>

</style>
