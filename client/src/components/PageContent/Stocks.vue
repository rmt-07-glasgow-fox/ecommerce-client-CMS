<template>
  <div class="w3-container" id="Stocks" style="margin-top: 75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Stocks.</b></h1>
    <button class="btn btn-success" @click="addAircraft()">Add Aircraft</button>
    <hr style="width: 50px; border: 5px solid red" class="w3-round" />
    <table class="table table-image" id="table" >
      <thead id="theader">
        <tr style="background-color: #F44336; color: #FEF6FF">
          <th scope="col">Id</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Equipment</th>
          <th scope="col">Engine</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        <Table
        v-for="product in listProducts"
        :key="product.id"
        :product='product'
        />
    </table>
  </div>
</template>

<script>
import Table from '@/components/PageContent/Table.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Stocks',
  components: {
    Table
  },
  data () {
    return {
    }
  },
  methods: {
    fetchAll () {
      this.$store.dispatch('getProducts')
    },
    fetchCategory () {
      this.$store.dispatch('getCategories')
    },
    addAircraft () {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4', '5']
      })
        .queue([
          {
            title: 'Name Or Type',
            text: 'Name or type of aircraft'
          },
          {
            title: 'Equipment',
            text: 'Equipment of aircraft'
          },
          {
            title: 'Price',
            text: 'Price of aircraft in USD'
          },
          {
            title: 'Stock',
            text: 'Stock of aircraft'
          },
          {
            title: 'Image',
            text: 'Image url of aircraft'
          }
        ])
        .then((result) => {
          if (result.value) {
            this.$store.dispatch('addProduct', result.value)
            this.fetchAll()
            this.fetchCategory()
          }
        })
    }
  },
  created () {
    this.fetchAll()
    this.fetchCategory()
  },
  updated () {
  },
  computed: {
    listProducts () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
#table {
  display: block;
  height: 800px;
  overflow-y: scroll;
  text-align: center;
  scrollbar-width: thin
}

</style>>
