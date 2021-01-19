<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/home">Home</router-link>
    </div>
    <router-view
      :user="user"
      @handleLogin="handleLogin"
    />
  </div>
</template>

<script>
import axios from './api/axios'

export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
    handleLogin (payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(res => {
        console.log(res.data)
        localStorage.setItem('access_token', res.data.access_token)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
  background-image: url('./assets/live_bg3.svg');
}

::-webkit-scrollbar {
  width: 8px;
  height: 9px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: rgb(202, 188, 188);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(197, 186, 186);
}
</style>
