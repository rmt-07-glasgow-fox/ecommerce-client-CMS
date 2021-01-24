<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <div class="float-left">
          <router-link :to="{ name: 'banner.add' }" class="btn btn-primary btn-flat">Tambah</router-link>
        </div>
          <div class="float-right">
              <input type="text" class="form-control"  placeholder="Cari..." v-model="search">
          </div>
      </div>
      <div class="card-body">
          <b-table striped hover bordered :items="datas.data" :fields="fields" show-empty>
            <template v-slot:cell(image_url)="row">
              <img
                :src="row.item.image_url"
                :width="400"
                :height="150"
                :alt="row.item.name"
              />
            </template>
            <template v-slot:cell(status)="row">
              <span v-if="row.item.status === true" class="badge badge-success">Active</span>
              <span v-else class="badge badge-warning">Not Active</span>
            </template>
            <template v-slot:cell(actions)="row">
                <router-link :to="{ name: 'banner.edit', params: {id: row.item.id} }" class="btn btn-warning btn-sm"><i class="fa fa-pencil-alt"></i></router-link>
                <button class="btn btn-danger btn-sm ml-1" @click="deleteBanner(row.item.id)"><i class="fa fa-trash"></i></button>
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
  created () {
    this.getBanners()
  },
  data () {
    return {
      fields: [
        { key: 'image_url', label: 'Image' },
        { key: 'title', label: 'Title' },
        { key: 'status', label: 'Status' },
        { key: 'actions', label: 'Action' }
      ],
      search: ''
    }
  },
  computed: {
    ...mapState('banner', {
      datas: state => state.banners
    }),
    page: {
      get () {
        return this.$store.state.banner.page
      },
      set (val) {
        this.$store.commit('banner/SET_PAGE', val)
      }
    }
  },
  watch: {
    page () {
      this.getBanners()
    },
    search () {
      this.getBanners(this.search)
    }
  },
  methods: {
    ...mapActions('banner', ['getBanners', 'removeBanners']),
    deleteBanner (id) {
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
          this.removeBanners(id)
        }
      })
    }
  }
}
</script>
