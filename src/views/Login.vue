<template>
  <div id="login">
    <div
      class="bg-fixed w-screen h-full"
      style="
        background-image: url(https://www.wallpapertip.com/wmimgs/172-1721397_wallpaper-black-green-3d-cubes-purple-medium-purple.jpg);
      "
    >
      <div
        class="container mx-auto h-full w-auto flex justify-center items-center"
      >
        <div class="w-1/3 h-1/3">
          <h1 class="text-white font-bold text-6xl uppercase">
            Toko<img
              class="inline-block pb-5"
              src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
              width="80px"
            />idia
          </h1>
          <div class="p-8 border-t-12 bg-gray-800 mb-6 rounded-lg shadow-lg">
            <form @submit.prevent="login">
              <div class="mb-4">
                <label class="font-bold text-green-400 block mb-2 py-1"
                  >Email</label
                >
                <input
                  v-model="loginEmail"
                  type="text"
                  class="block appearance-none w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
                  placeholder="Your Email"
                />
              </div>

              <div class="mb-4">
                <label class="font-bold text-green-400 block mb-2 py-1"
                  >Password</label
                >
                <input
                  v-model="loginPassword"
                  type="password"
                  class="block w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
                  placeholder="Your Password"
                />
              </div>

              <div class="flex justify-center items-center">
                <button type="submit" class="bg-transparent text-white font-bold py-2 px-4">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class="text-center">
            <p class="text-white text-sm">
              Don't have an account?
              <a href="#" class="no-underline font-bold">Create an Account</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'
export default {
  name: 'Login',
  data () {
    return {
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    async login () {
      try {
        const user = await axios({
          method: 'POST',
          url: '/login',
          data: {
            email: this.loginEmail,
            password: this.loginPassword
          }
        })
        this.loginEmail = ''
        this.loginPassword = ''
        localStorage.setItem('access_token', user.data.access_token)
      } catch (err) {
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      }
    }
  }
}
</script>

<style>
</style>
