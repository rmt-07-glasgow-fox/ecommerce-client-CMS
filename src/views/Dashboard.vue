<template>
  <div>
    <div>
      <Navbar
      />
    </div><br><br>
    <div><h3 style="margin-left:20px;">Your Products: </h3></div>
    <div class="container">
    <div class="row">
      <Card
      v-for="item in items"
      :key="item.id"
      :item="item"
      />
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'

export default {
  name: 'Dashboard',
  components: {
    Card,
    Navbar
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchAllData')
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  }
}
</script>
