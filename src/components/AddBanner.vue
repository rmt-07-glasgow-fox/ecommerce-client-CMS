<template>
  <div id="addBanner">
    <h1 class="py-2 text-xl no-underline font-bold  text-green-400">
    Add Banner
    </h1>
    <div class="w-full pr-2">
      <form @submit.prevent="addBanner">
        <div class="mt-2 ml-2">
          <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
            >Name</label
          >
          <input
            v-model="addName"
            type="text"
            class="block appearance-none w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
            placeholder="banner name"
          />
        </div>

        <div class="mt-2 ml-2">
          <label class="font-bold text-sm text-purple-400 block mb-2 py-1"
            >URL</label
          >
          <input
            v-model="addUrl"
            type="text"
            class="block appearance-none w-full bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
            placeholder="banner url"
          />
        </div>

        <div class="mt-3 ml-6 flex justify-center items-center">
          <button type="submit" class="bg-transparent text-green-400 font-bold py-2 px-4">
            Add
          </button>
          <button type="button"
          @click.prevent="cancelAdd"
          class="bg-transparent text-red-400 font-bold py-2 px-4">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBanner',
  data () {
    return {
      addName: '',
      addUrl: ''
    }
  },
  methods: {
    addBanner () {
      this.$store.dispatch('addBanner', {
        name: this.addName,
        url: this.addUrl
      }).catch(err => {
        err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      })
    },
    cancelAdd () {
      this.$router.push('/banners')
    }
  }
}
</script>

<style>

</style>
