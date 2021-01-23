<template>
  <div class="card col-3 m-2">
    <img :src="banner.image_url" class="card-img">
    <div class="">
      <div class="title">{{ banner.title }}</div>
      <div>status: {{ banner.status }}</div>
      <button class="btn btn-dark btn-sm" @click="editBanner"><i class="fas fa-pen"></i> Edit</button >
      <button class="btn btn-danger btn-sm ml-2" @click="deleteBanner(banner.id)"><i class="fas fa-trash"></i> Delete</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  props: ['banner'],
  methods: {
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
          this.$store.dispatch('deleteBanner', id)
        }
      })
    },
    async editBanner () {
      const { value: banner } = await Swal.fire({
        title: 'Add Banner',
        html: `
        <div class="mb-3 row">
          <label class="col-sm-1 col-form-label"><i class="fas fa-briefcase"></i></label>
          <div class="col-sm-11">
            <input type="text" class="form-control" id="title" placeholder="title" value="${this.banner.title}">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-1 col-form-label"><i class="fas fa-toggle-on"></i></label>
          <div class="col-sm-11">
            <select class="form-control" id="status">
              <option value="active" ${this.banner.status === 'active' ? 'selected' : ''}>Active</option>
              <option value="inactive" ${this.banner.status === 'inactive' ? 'selected' : ''}>Inactive</option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-1 col-form-label"><i class="fas fa-image"></i></label>
          <div class="col-sm-11">
            <textarea type="number" class="form-control" id="image_url" rows="5" placeholder="image url">${this.banner.image_url}</textarea>
          </div>
        </div>`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('title').value,
            document.getElementById('status').value,
            document.getElementById('image_url').value
          ]
        }
      })

      if (banner) {
        const [title, status, imageUrl] = banner
        const payload = {
          id: this.banner.id,
          title,
          status,
          imageUrl
        }
        this.$store.dispatch('editBanner', payload)
      }
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 1.2em;
    font-weight: 800;
  }
  .card{
    padding: 0 !important;
  }
  .col-3{
    width: 100%;
    height: 300px;
  }
  .card-img{
    object-fit: cover;
    height: 200px;
    width: 100%;
  }
</style>
