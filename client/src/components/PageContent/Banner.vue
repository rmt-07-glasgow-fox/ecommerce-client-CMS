<template>
    <div class="position-static">
      <transition name="slide">
      </transition>
      <transition-group tag="div" class="img-slider" name="slide">
      <div v-for="number in [currentImg]" v-bind:key="number" >
        <img :src="images[Math.abs(currentImg) % images.length]"/>
      </div>
      </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      timer: null,
      currentIndex: 0,
      currentImg: 0
    }
  },
  mounted: function () {
    this.startSlide()
    this.fetchBanner()
    setInterval(() => {
      this.currentImg = this.currentImg + 1
    }, 3000)
  },
  created () {
    this.fetchBanner()
  },
  methods: {
    fetchBanner () {
      this.$store.dispatch('getBanner')
    },
    startSlide: function () {
      this.timer = setInterval(this.next, 4000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    }
  },

  computed: {
    banners () {
      return this.$store.state.banner
    },
    images () {
      return this.$store.getters.bannerImages
    }
  }
}
</script>

<style>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.img-slider{
  overflow: hidden;
  position: relative;
  height: 200px;
  width: 100%;
}

.img-slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
}
</style>
