<template>
  <div>
        <div class="relative w-auto my-6 mx-auto max-w-3xl" style="width: 500px">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 class="text-3xl font-semibold">
              Edit
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModalEdit">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
      <!--  -->
      <form>
       <div class="mb-5 mt-3 p-2 flex justify-center">
            <label class="w-1/4" for="banner-title">Title</label>
            <input class="bg-gray-200 rounded p-1" type="text" v-model="banner.title" id="banner-title">
          </div>
          <div class="w-full mb-5 flex justify-center">
            <label class="w-1/4" for="banner-image">Image URL</label>
            <input class="bg-gray-200 rounded p-1" type="text" v-model="banner.image_url" id="banner-image">
          </div>
          <div class="mb-5 mt-5 p-2 flex justify-center">
          <label class="w-1/4"  for="banner-status">Status:</label>
              <select v-model="banner.status" class="w-2/5 bg-gray-200 rounded p-1" name="banner-status" id="banner-status">
                  <option value="active">Active</option>
                  <option value="discontinued">Discontinued</option>
              </select>
           </div>
          <div class="flex justify-center p-2 border-t border-solid border-gray-300 rounded-b">
            <button class="text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" @click.prevent="toggleModalEdit">
              Cancel
            </button>
            <button class="text-purple-600 bg-transparent hover:bg-purple-500 hover:text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" @click.prevent="updateBanner(banner.id)">
              Edit
            </button>
          </div>
      </form>
       </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Edit',
  methods: {
    toggleModalEdit () {
      this.$store.commit('toggleModalEdit')
    },
    updateBanner (id) {
      this.$store.dispatch('updateBanner', id)
      this.toggleModalEdit()
    }
  },
  computed: {
    banner () {
      return this.$store.state.banner
    }
  }
}
</script>
