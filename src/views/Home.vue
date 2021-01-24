<template>
<div>
  <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 100vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  style by <span class="text-yellow-600">MANDA</span>
                </h1>
                <p class="italic mt-4 text-lg text-gray-500">
                  Check out our Summer Sale Collection 2021
                </p>
                <div>
                    <button  class="font-semibold py-3 px-20 m-10 rounded shadow bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-800 hover:to-purple-900" @click.prevent="redirectLogin" type="submit">View Products</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    redirectLogin () {
      this.$store.dispatch('redirectLogin')
    }
  }
}
</script>
