<template>
  <div
    id="card"
    class="bg-gray-800 mx-2 my-2 px-2 py-2 w-1/6 overflow-hidden rounded-lg shadow-lg"
  >
    <div class="overflow-hidden rounded-lg shadow-lg">
      <div>
        <img alt="Placeholder" class="w-full rounded" :src="product.url" />
      </div>

      <div class="flex items-center justify-between leading-tight p-2">
        <h1 class="text-lg">
          <div class="no-underline font-bold text-green-400">
            {{ product.name }}
          </div>
        </h1>
        <button
          role="button"
          @click="goDetails"
          class="text-yellow-400 text-xs font-semibold focus:outline-none">
          Detail
        </button>
      </div>
      <div>
        <div
          v-if="showModal"
          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-3xl">
            <div class="container my-20 mx-auto h-1/2">
              <div class="flex flex-row justify-items-center justify-center">
                <div
                  class="bg-gray-800 p-2 overflow-hidden rounded-lg shadow-lg">
                  <div class="flex rounded-lg shadow-lg">
                    <div>
                      <img
                        alt="Placeholder"
                        class="w-full rounded"
                        :src="product.url"
                      />
                    </div>
                    <details-card
                    @goDetails="goDetails"
                    :product="product"></details-card>
                    <p role="button"
                    @click="goDetails"
                    class="text-yellow-400 font-bold text-lg">x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-80 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import DetailsCard from './DetailsCard.vue'
export default {
  name: 'ProductCard',
  props:
    ['product'],
  components: {
    DetailsCard
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    goDetails () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
</style>
