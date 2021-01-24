<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <div class="float-left">
          <router-link :to="{ name: 'product.add' }" class="btn btn-primary btn-flat">Tambah</router-link>
        </div>
          <div class="float-right">
              <input type="text" class="form-control"  placeholder="Cari..." v-model="search">
          </div>
      </div>
      <div class="card-body">
          <b-table striped hover bordered :items="datas.data" :fields="fields" show-empty>
            <template v-slot:cell(actions)="row">
                <router-link :to="{ name: 'product.edit', params: {id: row.item.id} }" class="btn btn-warning btn-sm"><i class="fa fa-pencil-alt"></i></router-link>
                <button class="btn btn-danger btn-sm ml-1" @click="deleteProduct(row.item.id)"><i class="fa fa-trash"></i></button>
            </template>
        </b-table>

        <div class="row">
            <div class="col-md-6">
                <p v-if="datas.data" class="float-left"><i class="fa fa-bars"></i> {{ datas.data.length }} item dari {{ datas.totalItems }} total data</p>
            </div>
            <div class="col-md-6">
                <div class="float-right">
                    <b-pagination
                        v-model="page"
                        :total-rows="datas.totalItems"
                        :per-page="datas.per_page"
                        aria-controls="datas.data"
                        v-if="datas.data && datas.data.length > 0">
                    </b-pagination>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'DataProduct',
  created () {
    this.getProducts()
  },
  data () {
    return {
      fields: [
        { key: 'name', label: 'Nama Item' },
        { key: 'price', label: 'Harga' },
        { key: 'stock', label: 'Stock' },
        { key: 'category.name', label: 'Category' },
        { key: 'actions', label: 'Aksi' }
      ],
      search: ''
    }
  },
  computed: {
    ...mapState('product', {
      datas: state => state.products
    }),
    page: {
      get () {
        return this.$store.state.product.page
      },
      set (val) {
        this.$store.commit('product/SET_PAGE', val)
      }
    }
  },
  watch: {
    page () {
      this.getProducts()
    },
    search () {
      this.getProducts(this.search)
    }
  },
  methods: {
    ...mapActions('product', ['getProducts', 'removeProduct']),
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.removeProduct(id)
        }
      })
    }
  }
}
</script>
