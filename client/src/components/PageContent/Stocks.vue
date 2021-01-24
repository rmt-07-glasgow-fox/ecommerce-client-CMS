<template>
  <div class="w3-container" id="Stocks" style="margin-top: 75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Stocks.</b></h1>
    <button class="btn btn-success" @click="addAircraft()">Add Aircraft</button>
    <div class="select">
      <select name="slct" id="slct" style="float:right" v-model="category" >
        <option selected disabled>Choose an option</option>
        <option value="All">All</option>
        <option
        v-for="category in categories"
        :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
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
  watch: {
    category (newVal) {
      this.$store.commit('changeCategory', newVal)
    }
  },
  data () {
    return {
      category: 'Choose an option'
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
  computed: {
    listProducts () {
      return this.$store.getters.filterCategory
    },
    categories () {
      return this.$store.state.categories
    },
    uploadedImage () {
      return this.$store.state.uploadedImage
    }
  },
  created () {
    this.fetchAll()
    this.fetchCategory()
  },
  updated () {
  },
  mounted () {
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
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #f46336;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display:none;
}
/* Custom Select */
.select {
  position:relative;
  float: right;
  display: flex;
  width: 14em;
  height: 3em;
  line-height: 3;
  background: #fff;
  overflow: hidden;
  border-radius: .25em;
}

select {
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #F44336;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}

</style>>
