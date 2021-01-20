<template>
  <v-app>
    <RouterView/>
  </v-app>
</template>

<script>
import RouterView from '@/components/RouterView'

export default {
  name: 'App',
  components: {
    RouterView
  }
}
</script>
