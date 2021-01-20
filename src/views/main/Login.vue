<template>
  <v-app>
    <v-container fill-height class="d-flex flex-column justify-center align-center">
      <v-card min-width="400px" max-width="400px">
        <v-card-title primary-title class="justify-center accent--text">LOGIN ADMIN</v-card-title>
        <v-card-text>
          <form method="post" @submit.prevent="login">
            <v-text-field
              v-model="user.email"
              :error="isError"
              :error-messages="emailErrors"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :error-messages="passwordErrors"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              hint="Input your valid password"
              class="input-group--focused"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <div class="ma-5" align="center">
              <v-btn @click="clear">clear</v-btn>
              <v-btn type="submit" class="ma-2" color="accent" dark>
                login
                <v-icon right dark>mdi-login</v-icon>
              </v-btn>
            </div>
          </form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      showPassword: false,
      isError: false,
      emailErrors: '',
      passwordErrors: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          this.isError = true
          this.passwordErrors = err.response.data.message
        })
    },
    clear () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
