import axios from '@/api/axios'
import Swal from 'sweetalert2'

const moduleBanner = {
  state: () => ({
    banners: [],
    banner: {}
  }),
  mutations: {
    fetchBanners (state, banners) {
      state.banners = banners
    },
    mutateBanner (state, banner) {
      state.banner = banner
    },
    newBanner (state, banner) {
      state.banners.push(banner)
    },
    deleteBanner (state, id) {
      state.banners.map((banner, i) => {
        if (banner.id === id) {
          state.banners.splice(i, 1)
        }
      })
    },
    updateBanner (state, data) {
      state.banners.map(banner => {
        if (banner.id === data.id) {
          banner.title = data.title
          banner.image_url = data.image_url
          banner.status = data.status
          banner.CategoryId = data.CategoryId
          banner.Category = data.Category
        }
      })
    },
    updateStatus (state, data) {
      state.banners.map(banner => {
        if (banner.id === data.id) {
          banner.status = data.status
        }
      })
    }
  },
  actions: {
    getAllBanners (context) {
      axios({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('fetchBanners', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    getOneBanner (context, id) {
      axios({
        method: 'GET',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('mutateBanner', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    createBanner (context, data) {
      axios({
        method: 'POST',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        },
        data: data
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('newBanner', data)
          // router.push({ name: 'Detail Banner', params: { id: data.id } })
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    updateBanner (context, payload) {
      axios({
        method: 'PUT',
        url: '/banners/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload.newBanner
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('updateBanner', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    deleteBanner (context, id) {
      axios({
        method: 'DELETE',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, ' ???')
          context.commit('deleteBanner', id)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    // update status
    updateStatus (context, payload) {
      axios({
        method: 'PATCH',
        url: '/banners/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: { status: payload.status }
      })
        .then(({ data }) => {
          console.log(data)
          // context.commit('updateBanner', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    // Modal Swal
    async showFormBanner (context, payload) {
      //
      const { data, categories } = payload
      console.log(data && data.CategoryId === 11)
      const { value: formValues } = await Swal.fire({
        title: 'Create New Banner',
        html:
        `<input value="${data ? data.title : ''}" id="title" type="text" placeholder="Your banner title" class="swal2-input">
        <input value="${data ? data.image_url : ''}" id="image_url" type="text" placeholder="Image Url" class="swal2-input">
        <div class="form-select">
          Category : 
          <select class="swal2-select" id="CategoryId">
            <option value="" selected> Select Category </option>
            ${categories.map(el =>
              '<option value="' + el.id + '" ' +
              'selected' +
              '>' +
              el.name + '</option>"'
            )}
          </select>
        </div>
        <div class="form-check">
            <input ${(data && data.status) ? 'checked' : ''} class="form-check-input" type="checkbox" value="" id="status">
            <label class="form-check-label" for="status">
              Active to show
            </label>
        </div>
        `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('title').value,
            document.getElementById('image_url').value,
            document.getElementById('status').checked,
            document.getElementById('CategoryId').value
          ]
        }
      })
      if (formValues) {
        // console.log(formValues.includes('')) // cek empty
        const newBanner = {
          title: formValues[0],
          image_url: formValues[1],
          status: formValues[2],
          CategoryId: formValues[3]
        }
        data ? context.dispatch('updateBanner', { id: data.id, newBanner })
          : context.dispatch('createBanner', newBanner)
      }
    },
    deleteBannerModal (context, id) {
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
          context.dispatch('deleteBanner', id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  },
  getters: {
  }
}

export default moduleBanner
