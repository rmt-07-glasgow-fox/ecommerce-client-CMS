<template>
  <v-row
    class="fill-height ct"
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      sm="6"
      md="6"
    >
  <v-card class="px-3 card" max-width="700px" color="rgb(255, 0, 0, 0.2)">
  <validation-observer
    ref="observer"
    justify="center"
    align="center"
  >
      <v-card-text>
    <form @submit.prevent="submit">
        <v-row
          align="center"
          justify="center"
        >
        <v-col
          class="mt-3"
          cols="12"
          sm="9"
          md="9"
        >
          <h1>Ecommerce-CMS</h1>
        </v-col>
          <v-col
            cols="12"
            sm="9"
            md="9"
          >
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              color="light-blue lighten-1"
              prepend-icon="mdi-email"
              required
            ></v-text-field>
          </validation-provider>

          </v-col>
          <v-col
            cols="12"
            sm="9"
            md="9"
          >
            <validation-provider
              v-slot="{ errors }"
              name="Password"
              rules="required|min:6"
            >
              <v-text-field
                type="password"
                v-model="password"
                prepend-icon="mdi-lock"
                :error-messages="errors"
                color="light-blue lighten-1"
                label="Password"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>

      <v-col
        cols="12"
        md="9"
        sm="9"
      >
        <v-btn
          class="mr-4"
          type="submit"
          color="light-blue lighten-1"
          block
        >
          Login
        </v-btn>
      </v-col>
      </v-row>

    </form>
    </v-card-text>
  </validation-observer>
  </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { required, digits, email, max, regex, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})'
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters'
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters'
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    submit () {
      console.log(this.email, this.password, '<<<<<<<<<')
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  }
}
</script>

<style>
  .card {
    margin-top: 60px;
  }
</style>
