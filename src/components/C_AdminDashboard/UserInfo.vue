<template>
  <div class="row" style="margin-left: 16px; margin-top: 24px">
    <div class="col-3" style="padding: 0">
      <img
        :src="userInfo.profpic"
        alt=""
        width="32"
        style="border-radius: 24px"
      />
    </div>
    <div class="col-8 align-self-center" style="padding: 0">
      <h6 style="margin: 0; padding: 0; font-weight: 600">
        {{ userInfo.firstname }}
      </h6>
      <p style="margin: 0; padding: 0; font-size: 11px">{{ userInfo.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  methods: {
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>
