<template>
  <div class="container">
    <div>
      <LoginForm class="w-25 mx-auto"/>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  name: 'Auth',
  data () {
    return {
      currentPage: ''
    }
  },
  methods: {
    changePage (payload) {
      this.currentPage = payload
    }
  },
  components: {
    LoginForm
  }
}
</script>

<style>

</style>
