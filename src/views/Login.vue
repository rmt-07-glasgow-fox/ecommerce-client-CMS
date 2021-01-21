<template>
<div>
  <main>
    <div class="h-screen flex bg-gray-100">
      <!-- left -->
      <div class="w-1/2 flex justify-center items-center bg-white">
        <div class="w-1/2">
          <h3 class="text-3xl font-light text-gray-600 mb-5">Sign In</h3>
          <form>
              <div class="border-b">
                <input type="email" v-model="user.email" id="login-email" placeholder="email" class="text-gray-700 bg-transparent py-3 focus:ring-2 focus:ring-gray-300 w-full">
              </div>
              <div class="border-b">
                <input type="password" v-model="user.password" id="login-password" placeholder="password" class="text-gray-700 bg-transparent py-3 focus:ring-2 focus:ring-gray-300 w-full">
              </div>
              <div>
                <button @click.prevent="login" type="submit" class="bg-purple-400 w-full rounded-lg py-2 mt-7 shadow-lg text-white font-semibold hover:bg-purple-500">SIGN IN</button>
              </div>
          </form>
        </div>
      </div>
      <!-- left -->
      <!-- right -->
      <div class="w-1/2 flex flex-col justify-center items-center" style="background-color: #9921e8; background-image: url('https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'); background-repeat: no-repeat; background-size: cover;">
        <div class="flex-1 flex flex-col justify-center items-center w-1/2">
          <h5 class="font-bold text-xl text-gray-100">WELCOME TO</h5>
          <a href="#" @click.prevent="redirectHome" class="font-semibold text-4xl py-10 text-gray-100 hover:text-purple-400">STYLE BY MANDA</a>
          <p class="text-sm text-gray-100 text-center">S/S 2021 Collection</p>
        </div>
      </div>
      <!-- right -->
    </div>
  </main>
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
    login () {
      this.$store.dispatch('login', this.user)
    },
    redirectHome () {
      this.$store.dispatch('redirectHome')
    }
  }
}
</script>
