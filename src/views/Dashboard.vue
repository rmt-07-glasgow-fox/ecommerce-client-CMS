<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <h1 class="text-dark">Dashboard</h1>
        <table class="table table-bordered">
          <tr>
            <th scope="col" class="w-50">Total Of Product</th>
            <td>{{ totalProduct }}</td>
          </tr>
          <tr>
            <th scope="col">Total Of Product With Zero Stock</th>
            <td>{{ totalStockZero }}</td>
          </tr>
          <tr>
            <th scope="col">Total Of Category</th>
            <td>{{ totalCategory }}</td>
          </tr>
          <tr>
            <th scope="col">Total Of Banner</th>
            <td>{{ totalBanner }}</td>
          </tr>
          <tr>
            <th scope="col">Total Of Active Banner</th>
            <td>{{ totalBannerActive }}</td>
          </tr>
        </table>
      </div>
      <div class="col-lg-2"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'totalProduct',
      'totalStockZero',
      'totalCategory',
      'totalBanner',
      'totalBannerActive'
    ])
  }
}
</script>

<style>

</style>
