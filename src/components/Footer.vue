<template>
  <footer class="absolute flex w-full bottom-0 bg-gray-100 pb-6 place-self-end">
    <div class="container mx-auto px-4">
      <hr class="mb-6 border-b-1 border-gray-600" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm text-gray-700 font-semibold py-1">
            Copyright © {{date}}
            <a
              href="#"
              class="text-gray-700 hover:text-gray-400 text-sm font-semibold py-1"
              >Amanda Rizqi</a
            >
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul
            class="flex flex-wrap list-none md:justify-end  justify-center"
          >
            <li>
              <a
                href="https://www.instagram.com/amandarzq/"
                class="text-gray-700 hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                >Instagram</a
              >
            </li>
            <li>
              <a
                href="https://github.com/amandarzq"
                class="text-gray-700 hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                >Github</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
