<template>
  <div class="materials">
    <NavbarMaterial></NavbarMaterial>
    <h1>Material Product List here..</h1>
    <div class="container">
      <div class="row">
        <MaterialCard
        v-for="material in materials"
        :key="material.id"
        :material="material"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MaterialCard from '../components/MaterialCard.vue'
import NavbarMaterial from '../components/NavbarMaterial'

export default {
  name: 'Material',
  components: {
    MaterialCard,
    NavbarMaterial
  },
  computed: {
    materials () {
      return this.$store.getters.filterMaterials
    }
  },
  created () {
    this.$store.dispatch('fetchMaterials')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 50px;
}
</style>
