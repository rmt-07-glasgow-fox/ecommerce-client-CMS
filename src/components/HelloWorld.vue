<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="m-6">A content management system (CMS) is a computer software used to manage the creation and modification of digital content.</p>
    <p class="m-6">CMSs are typically used for enterprise content management (ECM) and web content management (WCM).</p>
    <p class="m-6">ECM typically supports multiple users in a collaborative environment by integrating document management, digital asset management and record retention.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
