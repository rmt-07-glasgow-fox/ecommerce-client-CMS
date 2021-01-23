<template>
  <tbody>
    <tr v-if="editMode === false">
      <th id="middle" scope="row">{{ banner.id }}</th>
      <td class="w-25">
        <img
          :src="banner.image_url"
          class="img-fluid img-thumbnail"
          :alt="banner.title"
          id="image-table"
          @click="showImage"
        />
      </td>
      <td id="middle">{{ banner.title }}</td>
      <td id="middle">{{ banner.status }}</td>
      <td id="middle">
        <button
          class="btn btn-sm rounded-0 btn-success"
          type="button"
          @click="edit()"
          title="delete"
          style="color: white; "
        >
          <i class=""></i>Modify
        </button>
      </td>
    </tr>

    <tr v-if="editMode === true">
      <th id="middle" scope="row">{{ bannerId }}</th>
      <td class="w-25">
        <img
          :src="image_url"
          class="img-fluid img-thumbnail"
          :alt="bannerName"
          id="edit-image"
          @click="editImage"
        />
      </td>
      <td id="middle">
        <textarea v-model="bannerName" rows="2" cols="24" style="border: groove"></textarea>
      </td>
      <td id="middle">
        <select
          v-model="status"
          style="width: auto; border: inset"
        >
        <option value="True">True</option>
        <option value="False">False</option>
        </select>
        <hr />
        <button
          class="btn btn-success btn-sm rounded-0"
          type="button"
          style="width: 56px"
          @click="patchStatus"
          title="Edit"
        >
          Patch
        </button>
      </td>
      <td id="middle">
        <button
          class="btn btn-success btn-sm rounded-0"
          type="button"
          style="width: 60px"
          @click="updateBanner"
          title="Edit"
        >
          Update
        </button>
        <button
          class="btn btn-danger btn-sm rounded-0"
          type="button"
          style="width: 60px"
          title="cancel"
          @click="delBanner(banner.id)"
        >
          Delete
        </button>
        <hr />
        <button
          class="btn btn-danger btn-sm rounded-0"
          type="button"
          style="width: 60px"
          title="cancel"
          @click="cancelEdit"
        >
          <i class="bi bi-trash"></i>Cancel
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Table',
  props: ['banner'],
  data () {
    return {
      editMode: false,
      bannerName: '',
      image_url: '',
      status: true,
      bannerId: 0
    }
  },
  methods: {
    edit () {
      this.bannerName = this.banner.title
      this.image_url = this.banner.image_url
      this.status = this.banner.status
      this.bannerId = this.banner.id
      this.editMode = true
    },
    updateBanner () {
      this.$store.dispatch('updateBanner', {
        id: this.bannerId,
        name: this.bannerName,
        image_url: this.image_url,
        status: this.status
      })
      this.editMode = false
    },
    patchStatus () {
      this.$store.dispatch('patchBanner', {
        id: this.bannerId,
        status: this.status
      })
      this.editMode = false
    },
    delBanner (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You wont be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('delBanner', id)
        }
      })
    },
    cancelEdit () {
      this.editMode = false
    },
    showImage () {
      Swal.fire({
        imageUrl: this.banner.image_url,
        imageWidth: 700,
        imageHeight: 100,
        imageAlt: 'Custom image'
      })
    },
    editImage () {
      Swal.fire({
        title: 'Change Picture By Url',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Change',
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.image_url = result.value
          this.updateBanner()
          this.editMode = false
        }
      })
    },
    uploadImage () {
      Swal.fire({
        title: 'Select a file',
        showCancelButton: true,
        confirmButtonText: 'Upload',
        input: 'file'
      }).then((file) => {
        if (file.value) {
          console.log(file.value)
          this.$store.dispatch('uploadImage', file.value)
        }
      })
    }
  },
  computed: {
    categories () {
      return this.$store.state.banner
    }
  }
}
</script>

<style>
.container {
  padding: 2rem 0rem
}

h4 {
  margin: 2rem 0rem 1rem
}

#edit-image:hover {
  cursor: pointer;
}

#image-table:hover {
  cursor: pointer;
}
#middle {
  text-align: center;
  vertical-align: middle
}
</style>
