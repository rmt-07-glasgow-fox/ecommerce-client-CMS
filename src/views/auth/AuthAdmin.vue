<template>
  <admin-login-form />
</template>

<script>
// @ is an alias to /src
import AdminLoginForm from '@/components/auth/AdminLoginForm.vue'

export default {
  name: 'AuthAdmin',
  components: {
    AdminLoginForm
  }
}
</script>
