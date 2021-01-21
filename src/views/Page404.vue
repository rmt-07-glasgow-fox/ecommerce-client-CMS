<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mt-3">
        <h1 class="mt-3"> Oops!</h1>
        <div class="mt-3">
          <h2> We can't seem to find the page you're looking for.</h2>
          <h3 class="mt-4"> Error code: 404</h3>
          <h3 class="mt-3">Here's some usefull link</h3>
          <ul>
            <li><a href="/">Product Dashboard</a></li>
            <li><a href="/banners">Banners</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4 mt-3">
        <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style scoped>
.row {
  display: flex;
  height: 100vh;
  align-items: center;
}
ul {
  list-style-type: none;
}

ul li a{
  color: #2c3e50;
}
</style>
