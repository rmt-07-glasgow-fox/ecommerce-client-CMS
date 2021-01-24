<template>
<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
        caption="House of Sneaker Lovers"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

     <b-carousel-slide
        caption="House of Sneaker Lovers"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1510&q=80"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="House of Sneaker Lovers"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images.unsplash.com/photo-1519810409043-b6d44921bfa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide
        caption="House of Sneaker Lovers"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      >
        <template #img>
          <img
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images.unsplash.com/photo-1509418969973-c560ee8f02a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1464&q=80"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
