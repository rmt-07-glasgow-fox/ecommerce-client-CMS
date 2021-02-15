<template>
    <div class="flex flex-wrap px-6 w-1/3 bg-gray-800 rounded-lg mx-5 my-5">
      <div class="w-full py-5">
          <div>
              <div>
                  <img :src="banner.url" class="h-auto w-full">
              </div>
              <div class="px-4 py-6">
                  <h1 class="font-bold text-lg uppercase text-green-400">
                      {{ banner.name }}
                  </h1>
                  <div class="flex flex-wrap pt-4 justify-center">
                    <button
                    @click="goDelete"
                    class="rounded-md px-5 py-2 bg-red-400 text-white font-semibold focus:outline-none">Delete</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'BannerCard',
  props: ['banner'],
  methods: {
    goDelete () {
      this.$swal.fire({
        title: `Delete ${this.banner.name}?`,
        text: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#F87171',
        closeOnConfirm: false,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Back'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteBanner', this.banner.id).catch(err => {
            this.$swal({
              icon: 'warning',
              text: err.message
            })
          })
        }
      })
    }
  }
}
</script>

<style>

</style>
