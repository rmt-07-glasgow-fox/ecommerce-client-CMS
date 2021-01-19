<template>
  <div>
    <div>
      <Navbar
      @logout="logout"
      />
    </div><br><br>
    <div class="container">
    <div class="row">
      <Card
      v-for="item in items"
      :key="item.id"
      :item="item"
      @getEdit="getEdit"
      @destroy="destroy"
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
  props: ['items'],
  components: {
    Card,
    Navbar
  },
  methods: {
    logout () {
      this.$emit('logout')
    },
    getEdit (id) {
      this.$emit('getEdit', id)
    },
    destroy (id) {
      this.$emit('destroy', id)
    }
  },
  created () {
    this.$emit('fetchAllData')
  }
}
</script>
