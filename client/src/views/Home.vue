<template>
  <div class="home">
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand"></a>
      <a class="navbar-brand">Admin</a>
      <form class="form-inline">
        <button class="btn btn-outline-danger my-2 my-sm-0">Logout</button>
      </form>
    </nav>
    <div id="home-content" class="col-10 row">
      <div id="tab-category">
        <div id="tab-category-content">
          <div id="title-category">
            <h4>category</h4>
          </div>
          <p>all (0)</p>
          <p>fashion (0)</p>
          <p>elektronik (0)</p>
          <p>makanan (0)</p>
          <p>rumah tangga (0)</p>
          <p>other (0)</p>
        </div>
      </div>
      <div id="product-list" class="row">
        <div class="card mt-4 ml-3" style="width: 18rem;">
          <img class="card-img-top" style="width: 17.9rem; height: 16.1rem;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKm0t12mrgYpQYZBMCzqcr-VlzgkV9h1Ttw&usqp=CAU" alt="Card image cap">
          <div class="card-body mx-auto">
            <h5 class="card-title">nama product</h5>
            <p class="card-text">harga :</p>
            <p class="card-text">stock :</p>
            <div id="card-footer" class="row">
              <button style="margin-right: 10px;">-</button>
              <p style="margin-left: 10px; margin-right: 20px;">0</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <div class="card mt-4 ml-3" style="width: 18rem;">
          <img class="card-img-top" style="width: 17.9rem; height: 16.1rem;" src="https://seragam.woffi.co.id/images/WATERMARK/201904/29/baju-seragam-pramuka-siaga-26030742548.jpg" alt="Card image cap">
          <div class="card-body mx-auto">
            <h5 class="card-title">nama product</h5>
            <p class="card-text">harga :</p>
            <p class="card-text">stock :</p>
            <div id="card-footer" class="row">
              <button style="margin-right: 10px;">-</button>
              <p style="margin-left: 10px; margin-right: 20px;">0</p>
              <button>+</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style>
  #tab-category {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
    color: white;
  }
  #tab-category-content {
    margin-left: 10px;
    margin-top: 70%;
  }
  #tab-category-content p {
    margin-top: 40px;
  }
  #product-list {
    margin-left: 200px;
  }
  #card-footer {
    margin-left: 20px;
  }
  #card-footer button {
    width: 30px;
    height: 30px;
    border: 0;
    background-color: black;
    color: white;
    outline: none;
    border-radius: 2px;
  }
  #card-footer button:hover {
    opacity: 0.8;
    outline: none;
  }
</style>
