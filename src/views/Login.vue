<template>
  <div id="login">
    <div
      class="bg-fixed w-screen h-screen bg-yellow-400"
      style="
        background-image: url(https://www.wallpapertip.com/wmimgs/172-1721397_wallpaper-black-green-3d-cubes-purple-medium-purple.jpg);">
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

              <div class="flex justify-center items-center p-4">
                <button type="submit" class="bg-transparent text-white font-bold py-2 px-8 bg-yellow-400 rounded-lg">
                  Login
                </button>
              </div>
            </form>
          </div>
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
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        email: this.loginEmail,
        password: this.loginPassword
      }).catch(err => {
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.access_token) {
      next()
    } else if (from.name === 'Products') {
      next('/products')
    } else if (from.name === 'Banners') {
      next('/banners')
    } else if (from.path === '/add') {
      next('/add')
    } else if (from.path === '/add/category') {
      next('/add/category')
    } else if (from.path === '/add/banner') {
      next('/add/banner')
    } else {
      next('/products')
    }
  }

}
</script>

<style>
</style>
