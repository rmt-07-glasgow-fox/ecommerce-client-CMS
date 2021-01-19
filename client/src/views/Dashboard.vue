<template>
  <section>
    <div class="row">
      <div class="col-2 sidebar">
        <header>CMS</header>
        <ul>
          <li><a href="#"><i class="fas fa-home"></i> Dashboard</a></li>
          <li><a href="#"><i class="fas fa-cart-plus"></i> Add Product</a></li>
          <li><a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
        </ul>
      </div>
      <div class="col-10 dashboard">
        <div class="container p-1">
          <h2>Dashboard</h2>
          <hr>
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="card mb-3 rounded" style="width: 800px;">
            <div class="row g-0 align-items-center">
              <div class="col-md-5">
                <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" height="160px" width="300px" style="object-fit: cover;">
              </div>
              <div class="col-md-4">
                <div class="card-body">
                  <h5 class="card-title">Product Name</h5>
                  <p class="card-text">Price: Rp. 500.000</p>
                  <p class="card-text"><small class="text-muted">Edit Delete</small></p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card-body" style="text-align: right;">
                  <p class="m-4">Stock: 100 Pcs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.dashboard {
  height: 100vh;
}
/* sidebar */
.sidebar {
  background-color: rgb(31, 31, 31);
  height: 100vh;
  list-style: none;
  text-decoration: none;
}
.sidebar header {
  color: white;
  font-size: 22px;
  text-align: center;
  line-height: 70px;
  user-select: none;
}
.sidebar ul li {
  list-style: none;
}

.sidebar ul li a{
  text-decoration: none;
}
.sidebar ul {
  padding: 0;
}
.sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50px;
  font-size: 15px;
  color: white;
  padding-left: 30px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid black;
  transition: .3s;
}

.sidebar ul a:hover {
  padding-left: 40px;
}
.sidebar ul a i {
  margin-right: 10px;
}
</style>
