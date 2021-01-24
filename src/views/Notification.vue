<template>
  <div>
    <h1>{{notification}}</h1>
    <h3>You will be redirected in <span id="time" class="countdown">00:03</span> seconds</h3>
    <p>Sorry yaa nunggu 3 detik, pengen explore timer + redirect page hehe :p</p>
  </div>
</template>

<script>
export default {
  methods: {
    startTimer (duration, display) {
      var timer = duration
      var minutes
      var seconds
      // kalau dipakainya function, dia dianggapnya diluar dari si object view
      var interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        display.textContent = minutes + ':' + seconds
        if (timer === 0) {
          // console.log('Timer should stop!')
          clearInterval(interval)
          this.$router.push('/dashboard')
        }
        if (--timer < 0) {
          timer = duration
        }
      }, 1000)
    },
    start () {
      var timer = 3
      var display = document.querySelector('#time')
      this.startTimer(timer, display)
    }
  },
  computed: {
    notification () {
      return this.$store.state.notification
    }
  },
  mounted () {
    this.start()
  }
}
</script>

<style>

</style>
