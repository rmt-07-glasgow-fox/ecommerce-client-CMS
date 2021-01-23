<template>
  <div class="pt-1 m-auto">
    <div class="mb-4">
      <router-link :to="'/add-banner'" class="btn btn-primary">Add Banner</router-link>
    </div>
    <div class="container overflow-auto" style="height: 75vh;">
      <b-card-group deck
        v-for="banner in banners"
        :key="banner.id">
        <b-card class="mb-5">
          <b-card-text>
            <h1>{{banner.title}}</h1>
          </b-card-text>
          <div class="mb-4" style="display: flex; justify-content: space-between">
            <div class="switch-btn" @click.prevent="changeBannerStatus(banner.id)">
              <b-form-checkbox
                class="switch-btn"
                v-model="banner.status"
                name="check-button"
                size="lg" switch> Turn <strong>{{ !banner.status ? 'on' : 'off' }}</strong> to <strong>{{ !banner.status ? 'activate' : 'deactivate' }}</strong> the banner
              </b-form-checkbox>
            </div>

            <div>
              <router-link
                :to="`/edit-banner/${banner.id}`">
                <i class="far fa-edit edit-banner mr-4">
                  <span> Edit Banner</span>
                </i>
              </router-link>
              <i class="far fa-trash-alt delete-banner"
                @click.prevent="deleteConfirmation(banner.id)">
                <span> Delete Banner</span>
              </i>
            </div>
          </div>
          <img :class="{ 'filter-banner': !banner.status }" :src="banner.image_url" width="100%" alt="">
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'BannerPage',
  data () {
    return {}
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    changeBannerStatus (id) {
      const [{ status }] = this.banners.filter(banner => banner.id === id)
      this.$store.dispatch('changeBannerStatus', { id, status: !status })
    },
    deleteConfirmation (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to retrieve this banner back!",
        icon: 'warning',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteBanner', id)
            Swal.fire(
              'Deleted!',
              'Your banner has been deleted.',
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
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style scoped>
  .delete-banner,
  .edit-banner {
    margin-top: 4px;
    font-size: 20px;
  }

  .delete-banner span,
  .edit-banner span {
    font-family: Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size: 20px;
  }

  .delete-banner:hover,
  .edit-banner:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .filter-banner {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%)
  }
</style>
