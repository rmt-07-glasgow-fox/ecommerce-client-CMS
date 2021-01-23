<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <h1 class="text-dark">Dashboard</h1>
        <table class="table table-bordered">
          <tr>
            <th scope="col" class="w-50">Total Product</th>
            <td>{{ totalProduct }}</td>
          </tr>
          <tr>
            <th scope="col">Total Product Stock 0</th>
            <td>{{ totalStockZero }}</td>
          </tr>
          <tr>
            <th scope="col">Total Category</th>
            <td>{{ totalCategory }}</td>
          </tr>
          <tr>
            <th scope="col">Total Banner</th>
            <td>{{ totalBanner }}</td>
          </tr>
          <tr>
            <th scope="col">Total Banner Aktif</th>
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
