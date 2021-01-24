<template>
  <div>
    <div class="row">
      <div class="col-4 offset-4 bg-light rounded" style="margin-top: 20px; margin-bottom: 20px;padding: 30px;">
        <div @submit.prevent ="login">
            <h2 style="text-shadow: white 1px 1px;">Login</h2><br>
            <form @submit.prevent="login">
              <input class="rounded" type="text" placeholder="Email" v-model="email"><br><br>
              <input class="rounded" type="password" placeholder="Password" v-model="password"><br><br>
              <button class="btn btn-dark rounded" type="submit" id="login-btn">Login</button>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          return this.$store.dispatch('toDashboard')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
