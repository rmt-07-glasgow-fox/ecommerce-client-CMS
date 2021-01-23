<template>
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <div class="login"
             v-if="page==='login'">
                <form-login></form-login>
            </div>
            <!-- <div class="register"
             v-else>
                <form-register></form-register>
            </div> -->
        </div>
        <div class="col-sm-4"></div>
    </div>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'
// import FormRegister from '../components/FormRegister.vue'

export default {
  name: 'Login',
  components: {
    FormLogin
    // , FormRegister
  },
  data () {
    return {
      page: 'login'
    }
  },
  props: ['isLogin'],
  methods: {
    changePage: function (halaman) {
      this.page = halaman
    }
  }
}
</script>

<style scoped>
.login {
    background-color: skyblue;
    padding: 50px 20px 56px 20px;
    border-radius: 10px;
}
.register {
    background-color: greenyellow;
    padding: 50px 20px 80px 20px;
    border-radius: 10px;
}
</style>
