<template>
  <tr>
    <td scope="row">{{ index + 1 }}</td>
    <td v-if="!showEditActive">{{ banner.title }}</td>
    <td v-if="!showEditActive">{{ banner.status }}</td>
    <td v-if="!showEditActive"><img :src="banner.image_url" width="100px" alt="" /></td>
    <td v-if="!showEditActive">
      <button class="btn btn-warning mr-2" @click="showEditForm">
        <i class="fa fa-edit" aria-hidden="true"></i></button
      ><button class="btn btn-danger" @click="deleteBanner(banner.id)">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </td>
    <td colspan="4" v-if="showEditActive">
      <form>
        <input type="hidden" v-model="image_url" />
        <div class="form-group">
          <label :for="banner.id">Title: </label>
          <input :id="banner.id" class="form-control w-25 mb-3" v-model="title" />
        </div>
        <div class="form-check">
          <input type="checkbox" v-model="status" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Status</label>
        </div>
        <div class="form-group mt-3">
          <button
            type="submit"
            class="btn btn-warning mr-2"
            @click.prevent="updateBanner(banner.id)"
          >
            Edit</button
          ><button class="btn btn-danger" @click="hideEditForm">
            Cancel
          </button>
        </div>
      </form>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'BannerItem',
  props: ['index', 'banner'],
  data() {
    return {
      title: this.banner.title,
      image_url: this.banner.image_url,
      status: this.banner.status,
      showEditActive: false,
    };
  },
  methods: {
    showEditForm() {
      this.showEditActive = true;
    },
    hideEditForm() {
      this.showEditActive = false;
    },
    async updateBanner(id) {
      try {
        const payload = {
          id,
          title: this.title,
          status: this.status,
          image_url: this.image_url,
        };
        await this.$store.dispatch('updateBanner', payload);
        this.hideEditForm();
        this.$swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Banner has been updated',
        });
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
    deleteBanner(id) {
      this.$swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await this.$store.dispatch('deleteBanner', id);
              this.$swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Banner has been deleted',
              });
            } catch (err) {
              this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
              });
            }
          }
        });
    },
  },
};
</script>

<style></style>
