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
          <b-table striped hover bordered :items="products" :fields="fields" show-empty>
            <template v-slot:cell(actions)="row">
                <router-link :to="{ name: 'product.edit', params: {id: row.item.id} }" class="btn btn-warning btn-sm"><i class="fa fa-pencil-alt"></i></router-link>
                <button class="btn btn-danger btn-sm" @click="deleteProduct(row.item.id)"><i class="fa fa-trash"></i></button>
            </template>
        </b-table>

        <div class="row">
            <div class="col-md-6">
                <p v-if="products"><i class="fa fa-bars"></i> {{ products.length }} item dari {{ products.meta.total }} total data</p>
            </div>
            <div class="col-md-6">
                <div class="pull-right">
                    <b-pagination
                        v-model="page"
                        :total-rows="products.meta.total"
                        :per-page="products.meta.per_page"
                        aria-controls="products"
                        v-if="products && products.length > 0"
                        ></b-pagination>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'DataPengguna',
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
      products: state => state.products
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
    ...mapActions('product', ['getProducts'])
  }
}
</script>
