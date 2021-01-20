<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Login</h3>
          <hr class="login-hr">
          <p class="subtitle has-text-black">Please login to proceed.</p>
            <div class="box">
              <figure class="avatar">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU">
              </figure>
              <br>
              <form @submit.prevent="login">
                  <div class="field">
                      <div class="control">
                          <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model="email">
                      </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="password" placeholder="Your Password" v-model="password">
                    </div>
                  </div>
                <button class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
              </form>
           </div>
         </div>
       </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = { email: this.email, password: this.password }
      console.log(payload)
      this.$store.dispatch('login', payload)
        .then(data => {
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
