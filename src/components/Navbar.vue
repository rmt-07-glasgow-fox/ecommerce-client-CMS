<template>
    <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark ps-5" style="background-color: black;">
    <div class="container-fluid">
      <a class="navbar-brand" >E-COMMERCE CMS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>

        <button class="btn btn-light btn-sm mt-1 me-3" style="font-weight: bold;">Add Product</button>
        <button class="btn btn-dark btn-sm mt-1 me-3" style="background-color: red; font-weight: bold;">Logout</button>

      </div>
    </div>
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
