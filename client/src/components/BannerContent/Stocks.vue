<template>
  <div class="w3-container" id="Stocks" style="margin-top: 75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Banner List.</b></h1>
    <button class="btn btn-success" @click="addBanner()">Add Banner</button>
    <div class="select">
      <select name="slct" id="slct" style="float:right" v-model="bannerStatus" >
        <option selected disabled>Choose an option</option>
        <option value="All">All</option>
        <option value="True">True</option>
        <option value="False">False</option>
      </select>
    </div>
    <hr style="width: 50px; border: 5px solid red" class="w3-round" />
    <table class="table table-image" id="table" >
      <thead id="theader">
        <tr style="background-color: #F44336; color: #FEF6FF">
          <th scope="col">Id</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
        <Table
        v-for="banner in listBanner"
        :key="banner.id"
        :banner='banner'
        />
    </table>
  </div>
</template>

<script>
import Table from '@/components/BannerContent/Table.vue'
import Swal from 'sweetalert2'

export default {
  name: 'Stocks',
  components: {
    Table
  },
  data () {
    return {
      bannerStatus: 'Choose an option'
    }
  },
  watch: {
    bannerStatus (newVal) {
      this.$store.commit('changeBannerStatus', newVal)
    }
  },
  methods: {
    fetchAll () {
      this.$store.dispatch('getBanner')
    },
    addBanner () {
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2']
      })
        .queue([
          {
            title: 'Name',
            text: 'Name of the banner'
          },
          {
            title: 'Image Url',
            text: 'Image url of Banner'
          }
        ])
        .then((result) => {
          if (result.value) {
            this.$store.dispatch('addBanner', result.value)
            this.fetchAll()
          }
        })
    }
  },
  computed: {
    listBanner () {
      return this.$store.getters.filterBanner
    }
  },
  created () {
    this.fetchAll()
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
