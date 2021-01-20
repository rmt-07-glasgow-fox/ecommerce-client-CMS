<template>
    <form class="mt-2 formRegister">
        <div>
            <p class="h2 text-center text-success">MyRegister</p>
        </div>
        <div class="registerResult" v-html="regFail">
            <p class="text-center text-success" v-text="regSuccess"></p>
        </div>
        <div class="form-group">
            <input type="email" class="form-control" v-model="user.emailReg" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="user.passwordReg" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-success btn-block" v-on:click.prevent="$emit('register', user)">Register</button>
        <button type="button" id="logbtn" class="btn btn-link" v-on:click.prevent="$emit('changePage', 'login')">
            Already have account?
        </button>
    </form>
</template>

<script>
export default {
  name: 'FormRegister',
  data () {
    return {
      user: {
        emailReg: '',
        passwordReg: ''
      }
    }
  }
}
</script>

<style scoped>
#logbtn {
    float: right;
    margin-top: 10px;
}
p {
    margin-bottom: 16px;
}
</style>
