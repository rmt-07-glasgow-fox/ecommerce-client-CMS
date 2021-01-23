<template>
  <div class="mt-3">
    <div style="height: 800px;">
      <b-table
        no-border-collapse
        head-variant="dark"
        :current-page="currentPage"
        :per-page="perPage"
        :sort-desc.sync="sortDesc"
        :fields="fields"
        :hover="true"
        :items="products"
      >
        <template
          #cell(no)="data"
        >
          <div><p>{{ data.item.no + 1 }}</p></div>
        </template>

        <!-- Produk image url -->
        <template
          #cell(imageUrl)="data"
        >
          <div class="overflow-hidden" :class="{'product-filter': !data.item.status}" style="width: 100px; height: 100px; border: 1px solid rgba(255, 255, 255, 0.5); padding: 1px">
          <b-img
            v-bind="mainProps"
            :src="data.item.image_url ? data.item.image_url : defaultImg"
            @click.prevent="showDetail(data.item.id)"
            @error="imageLoadError (data.item.id)"
          >
          </b-img>
          </div>
        </template>

        <!-- Product Name -->
        <template
          #cell(name)="data"
        >
          <div @click.prevent="showDetail(data.item.id)"><p class="text-info">{{ data.item.name }}</p></div>
        </template>

        <template
          v-slot:cell(status)="data">
          <div class="status-div" @click.prevent="changeStatus(data.item.id)">
            <p><b-form-checkbox v-model="data.item.status" name="check-button" size="lg" switch>
          </b-form-checkbox></p></div>
        </template>

        <!-- Stock -->
        <template
          v-slot:cell(stock)="data"
        >
          <div><p><input
            type="number"
            class="w-25"
            min="0"
            @blur="editStock(data.item.id)"
            v-model="data.item.stock"
          ></p></div>
        </template>

        <template
          #cell(id)="data">
          <div><p>
          <router-link
            class="edit-product-btn"
            :to="`/edit-product/${data.item.id}`"
          ><i class="fas fa-pencil-alt"></i>
          </router-link>
          <i class="fas fa-trash ml-3"
            @click.prevent="deleteConfirmation(data.item.id)"
          >
          </i>
          </p></div>
        </template>
      </b-table>
    </div>
    <b-col class="my-1">
      <b-pagination
        :total-rows="rows"
        :per-page="perPage"
        class="customPagination"
        v-model="currentPage"
        aria-controls="itemList"
        align="center"
      ></b-pagination>
    </b-col>

    <!-- Product Detail Modal -->
    <modal :product="product"/>
  </div>
</template>

<script>
import Modal from '../components/Modal'
import Swal from 'sweetalert2'
export default {
  name: 'ProductPage',
  components: {
    Modal
  },
  data () {
    return {
      fields: [
        { key: 'no', label: 'No', sortable: true, tdClass: 'table-no' },
        { key: 'imageUrl', label: '', thClass: 'table-img' },
        { key: 'name', label: 'Product Name', sortable: true, tdClass: 'table-name', thClass: 'table-headers-name' },
        { key: 'status', label: 'Status', sortable: true, tdClass: 'table-status' },
        { key: 'stock', label: 'Stock', sortable: true, tdClass: 'table-stock' },
        { key: 'id', label: 'Actions', tdClass: 'table-actions' }
      ],
      mainProps: {
        width: 150
      },
      defaultImg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png',
      sortDesc: true,
      currentPage: 1,
      perPage: 5
    }
  },
  methods: {
    changeStatus (id) {
      const { status } = this.products.find(product => product.id === id)
      this.$store.dispatch('changeStatusProduct', {
        id,
        status: !status
      })
    },
    showDetail (id) {
      this.$store.dispatch('fetchProduct', id)
      this.$bvModal.show('product-detail')
    },
    editStock (id) {
      const { stock } = this.products.find(product => product.id === id)

      if (stock < 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Stock cannot be less than zero',
          showConfirmButton: false
        })
        this.$emit('doNotUpdated')
      } else {
        this.$store.dispatch('editStock', {
          id,
          stock: +stock
        })
      }
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    imageLoadError (id) {
      this.$store.commit('updateErrorImage', {
        id,
        defaultImg: this.defaultImg
      })
    },
    deleteConfirmation (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to retrieve this product back!",
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteProduct', id)
            Swal.fire(
              'Deleted!',
              'Your product has been deleted.',
              'success'
            )
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    products () {
      return this.$store.state.products.map((product, i) => {
        product.no = i
        return product
      })
    },
    product () {
      return this.$store.state.product
    },
    rows () {
      return this.$store.state.rows
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
  .table-headers-name {
    width: 1000px
  }

  .customPagination > li > .page-link {
    color: black;
  }

  .customPagination > li.active > .page-link,
  .customPagination > li > .page-link:hover {
    color: white;
    background-color: black!important;
    opacity: 0.7
  }

  i {
    color:rgb(0, 0, 0);
    opacity: 0.7;
  }

  i:hover {
    cursor: pointer;
    opacity: 1;
  }
  a .edit-product-btn {
  text-decoration: none;
  color:rgb(0, 0, 0);
  }
  #add-product span {
    color: black;
    font-weight: bold;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    opacity: 1;
  }

  td img:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  .table-img {
    width: 100px;
  }
  .table-name {
    width: 65%;
  }
  .table-name:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .table-stock {
    width: 10%;
  }
  .table-no div,
  .table-name div,
  .table-stock div,
  .table-actions div,
  .table-status .status-div {
    display: flex;
    height: 100px;
    margin: auto;
    box-sizing: border-box;
  }
  .table-no div p {
    margin: auto;
    font-size: 20px;
  }

  .table-name div p,
  .table-stock div p,
  .table-actions div p,
  .table-status div p {
    margin: auto;
    font-size: 20px;
    font-weight: bolder;
  }

  .table-stock div p input {
    text-align: center;
    font-size: 20px;
    border-radius: 5px;
    width: 50% !important;
  }

  .product-filter {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%)
  }
</style>
