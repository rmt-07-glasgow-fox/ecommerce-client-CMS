<template>
  <div>
    <div>
      <Navbar
      @logout="logout"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'

export default {
  name: 'Main',
  props: ['items'],
  components: {
    Navbar
  },
  methods: {
    logout () {
      this.$emit('logout')
    }
  }
}
</script>

<style>

</style>
