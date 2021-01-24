<template>
  <div>
    <h1>You are logged in as:</h1>
    <h2>Email: {{email}}</h2>
    <h2>Role: {{role}}</h2>
    <a href="" class="btn btn-danger" @click.prevent="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      email: localStorage.email,
      role: localStorage.role
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
