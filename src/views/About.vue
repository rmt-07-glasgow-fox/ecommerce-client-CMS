<template>
  <div>
    <div class="hidden">
      <vs-sidebar absolute open background="primary" textWhite>
        <vs-sidebar-item id="products"> Products </vs-sidebar-item>
        <vs-sidebar-item id="addProducts"> Add new product </vs-sidebar-item>
        <vs-sidebar-item id="banners"> Banners </vs-sidebar-item>
        <vs-sidebar-item id="addBanners"> Add new banner </vs-sidebar-item>
        <vs-sidebar-item id="logout"> Logout </vs-sidebar-item>
      </vs-sidebar>
    </div>
    <div>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th> Name </vs-th>
            <vs-th> Email </vs-th>
            <vs-th> Id </vs-th>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>
