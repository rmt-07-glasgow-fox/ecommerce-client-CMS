<template>
  <div>{{ getPractice }}</div>
</template>

<script>
export default {
  computed: {
    getPractice () {
      return this.$store.state.practise
    }
  }
}
</script>

<style>

</style>
