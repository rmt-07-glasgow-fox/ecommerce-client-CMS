<template>
  <div>
      <div>
          <img src="https://www.dpmarketingcommunications.com/wp-content/uploads/2016/11/404-Page-Featured-Image.png" id="NotFoundImg">
      </div>
      <button @click="back" id="backHome">Home</button>
  </div>
</template>

<script>

export default {
  methods: {
    back () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
  #NotFoundImg {
    margin-top: 70px;
    width: 500px;
    margin-left: 30%;
  }
  #backHome {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    margin-top: 20px;
    margin-left: 45%;
    background-color: black;
    color: white;
    border: 0;
    opacity: 0.8;
    outline: none;
  }
  #backHome:hover {
    text-decoration: underline;
    transition: 0.5s;
    font-size: 25px;
    opacity: 1;
    outline: none;
  }
</style>
