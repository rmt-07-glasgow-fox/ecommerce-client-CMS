<template>
  <div class="m-auto container-fluid">
    <div class="current-status row mt-5">
        <div class="status-product">
          <div class="active-product border p-2 float-left">
            <h4 class="mt-4">Active Products</h4>
            <h2 class="mt-2 text-success">{{ activeProducts.length }} items</h2>
          </div>
          <div class="inactive-product border p-2 ml-5 float-left">
            <h4 class="mt-4">Inactive Products</h4>
            <h2 class="mt-2 text-secondary">{{ inactiveProducts.length }} items</h2>
          </div>

          <div class="empty-product border p-2 ml-5 float-left">
            <h4 class="mt-4">Empty Stocks</h4>
            <h2 class="mt-2 text-danger">{{ emptyProducts.length }} items</h2>
          </div>
        </div>

        <div class="total-order border p-2 float-right">
          <h4 class="mt-4">Total Order</h4>
          <h2 class="mt-2 text-info">{{ items.length }} orders</h2>
        </div>
    </div>
    <div class="order-list row mt-5">
      <h2 class="mx-auto">Order List</h2>
      <!-- <div style="height: 800px"> -->
      <div style="height: 590px; width: 100%">
        <b-table
          id="my-table"
          no-border-collapse
          head-variant="dark"
          :hover="true"
          :fields="fields"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small>
          <template
            #cell(id)="data">
            <div><p>{{ data.item.id }}</p></div>
          </template>
          <template
            #cell(firstname)="data">
            <div><p>{{ data.item.first_name }}</p></div>
          </template>
          <template
            #cell(lastname)="data">
            <div><p>{{ data.item.last_name }}</p></div>
          </template>
          <template
            #cell(address)="data">
            <div><p>{{ data.item.address }}</p></div>
          </template>
          <template
            #cell(orders)="data">
            <div><p>{{ data.item.orders }}</p></div>
          </template>
        </b-table>
      </div>
      <b-col class="my-1">
        <b-pagination
        v-model="currentPage"
        class="customPagination"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
        >
        </b-pagination>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: 'id', label: 'No', tdClass: 'order-id' },
        { key: 'firstname', label: 'First Name', tdClass: 'order-firstname' },
        { key: 'lastname', label: 'Last Name', tdClass: 'order-lastname' },
        { key: 'address', label: 'Address', tdClass: 'order-address' },
        { key: 'orders', label: 'Orders', tdClass: 'order-item' }
      ],
      items: [
        { id: 1, first_name: 'Fred', last_name: 'Flintstone', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 3, first_name: 'Barney', last_name: 'Rubble', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 4, first_name: 'Betty', last_name: 'Rubble', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 10, first_name: 'Pebbles', last_name: 'Flintstone', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 11, first_name: 'Fred', last_name: 'Flintstone', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 12, first_name: 'Wilma', last_name: 'Flintstone', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 13, first_name: 'Barney', last_name: 'Rubble', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 14, first_name: 'Betty', last_name: 'Rubble', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 15, first_name: 'Pebbles', last_name: 'Flintstone', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 16, first_name: 'Bamm Bamm', last_name: 'Rubble', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 17, first_name: 'The Great', last_name: 'Gazzoo', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 18, first_name: 'Rockhead', last_name: 'Slate', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] },
        { id: 19, first_name: 'Pearl', last_name: 'Slaghoople', address: 'Jakarta', orders: [{ item: 'Laskar Pelangi', price: 69000, qty: 1 }] }
      ]
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    rows () {
      return this.items.length
    },
    emptyProducts () {
      return this.$store.state.products.filter(product => product.stock === 0)
    },
    activeProducts () {
      return this.$store.state.products.filter(product => product.status === true)
    },
    inactiveProducts () {
      return this.$store.state.products.filter(product => product.status === false)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
  .current-status {
    display: flex;
    justify-content: space-between;
  }

  .active-product,
  .inactive-product,
  .total-order,
  .empty-product {
    width: 300px;
    height: 150px;
  }

  .order-id div,
  .order-firstname div,
  .order-lastname div,
  .order-address div,
  .order-item div {
    display: flex;
    height: 100px;
    margin: auto;
    box-sizing: border-box;
  }

  .order-id div p,
  .order-firstname div p,
  .order-lastname div p,
  .order-address div p,
  .order-item div p {
    margin: auto;
    font-size: 20px;
  }
</style>
