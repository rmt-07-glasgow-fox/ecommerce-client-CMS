<template>
  <div class="home">
    <list></list>
      <div id="content" class="container w-screen my-20 mx-auto">
        <div class="flex w flex-wrap justify-items-start">
          <card v-for="product in products"
          :key="product.id"
          :product="product"></card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    List,
    Card
  },
  props: ['categories', 'products']
}
</script>
