<template>
  <div
    id="card"
    class="bg-gray-800 mx-2 my-2 px-2 py-2 w-1/6 overflow-hidden rounded-lg shadow-lg"
  >
    <article class="overflow-hidden rounded-lg shadow-lg">
      <div>
        <img
          alt="Placeholder"
          class="w-full rounded"
          :src="product.url"
        />
      </div>

      <header class="flex items-center justify-between leading-tight p-2">
        <h1 class="text-lg">
          <div class="no-underline font-bold text-green-400"> {{ product.name }} </div>
        </h1>
        <p class="text-gray-400 text-sm">Edit</p>
      </header>

      <footer class="flex items-center justify-between leading-none p-2">
        <div class="flex flex-col items-start no-underline text-white">
          <p class="text-sm font-bold"><span class="text-purple-400 font-semibold mr-1">Price: </span> {{ product.price }}</p>
          <p class="text-sm font-bold"><span class="text-purple-400 font-semibold mr-1">Stock: </span> {{ product.stock }}</p>
          <p class="text-sm font-bold"><span class="text-purple-400 font-semibold mr-1">Status: </span> {{ product.status }}</p>
        </div>
        <div class="no-underline text-gray-300">
          <span class="hidden">Detail</span>
          <i class="fa fa-book"></i>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product']
}
</script>

<style scoped>

</style>
