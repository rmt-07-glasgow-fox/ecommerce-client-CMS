<template>
  <div class="container-fluid">
    <h1 class="mt-4">Banners</h1>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary mb-3" @click="showAddForm">Add Banner</button>
        <div class="card mb-3 w-50 p-3" v-if="showFormActive">
          <form @submit.prevent="addBanner">
            <div class="form-group">
              <label for="">Title: </label>
              <input
                type="text"
                class="form-control"
                v-model="title"
                placeholder="Enter Title Banner"
              />
            </div>
            <div class="form-check">
              <input type="checkbox" v-model="status" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Status</label>
            </div>
            <div class="input-group my-3">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  accept=".jpg,.gif,.png"
                  id="inputGroupFile02"
                  @change="onFileChange"
                />
                <label class="custom-file-label" for="inputGroupFile02">{{ imageName }}</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary mr-2">
              Create
            </button>
            <button type="button" @click="hideAddForm" class="btn btn-danger">
              Close
            </button>
          </form>
        </div>
        <table class="table table-striped" v-if="banners.length > 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Status</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <banner-item
              v-for="(banner, index) in banners"
              :key="index"
              :banner="banner"
              :index="index"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import BannerItem from './BannerItem.vue';

export default {
  name: 'Banners',
  components: { BannerItem },
  data() {
    return {
      showFormActive: false,
      title: '',
      status: false,
      image: null,
      imageName: 'Choose file',
    };
  },
  methods: {
    showAddForm() {
      this.showFormActive = true;
    },
    hideAddForm() {
      this.showFormActive = false;
    },
    onFileChange(event) {
      const f = event.target.files[0];
      this.image = f;
      this.imageName = f.name;
    },
    async addBanner() {
      try {
        const fd = new FormData();

        fd.append('image', this.image);
        fd.append('title', this.title);
        fd.append('status', this.status);

        await this.$store.dispatch('addBanner', fd);
        this.name = '';
        this.hideAddForm();
        this.$swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Banner has been added',
        });
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
  },
  computed: {
    banners() {
      return this.$store.getters.banners;
    },
  },
  created() {
    this.$store.dispatch('fetchBanners');
  },
};
</script>

<style></style>
