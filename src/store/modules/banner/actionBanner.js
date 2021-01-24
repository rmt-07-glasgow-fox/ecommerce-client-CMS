import axios from '@/api/axios.js'
import router from '@/router/index.js'
import Swal from 'sweetalert2'

export default {
  fetchBanners (context) {
    Swal.queue([
      {
        title: 'Now loading...',
        text: 'Keep calm, because we are fetching your data!',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            const { data } = await axios({
              method: 'GET',
              url: '/banner'
            })

            context.commit('fetchBanners', data)
            Swal.close()
          } catch (err) {
            console.log(err.response.data.errors)
            const errMsg = err.response.data.errors

            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: errMsg
            })
          }
        }
      }
    ])
  },
  fetchOneBanner (context, id) {
    Swal.queue([
      {
        title: 'Now loading...',
        text: 'Keep calm, because we are fetching your data!',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            const { data } = await axios({
              method: 'GET',
              url: `/banner/${id}`,
              headers: { access_token: localStorage.getItem('access_token') }
            })

            context.commit('fetchOneBanner', data)
            Swal.close()
          } catch (err) {
            console.log(err.response.data.errors)
            const errMsg = err.response.data.errors

            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: errMsg
            })
          }
        }
      }
    ])
  },
  addBanner (context, payload) {
    Swal.queue([
      {
        title: 'Adding banner ...',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            await axios({
              method: 'POST',
              url: '/banner',
              headers: { access_token: localStorage.getItem('access_token') },
              data: {
                name: payload.name,
                image_url: payload.image_url
              }
            })

            this.dispatch('fetchBanners')
            router.replace('/admindashboard/banners')
            Swal.close()
          } catch (err) {
            console.log(err.response.data.errors)
            const errMsg = err.response.data.errors[0]

            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: errMsg
            })
          }
        }
      }
    ])
  },
  updateBanner (context, payload) {
    Swal.queue([
      {
        title: 'Editing banner ...',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            await axios({
              method: 'PUT',
              url: `/banner/${payload.id}`,
              headers: { access_token: localStorage.getItem('access_token') },
              data: {
                name: payload.name,
                image_url: payload.image_url
              }
            })

            this.dispatch('fetchBanners')
            router.replace('/admindashboard/banners')
            Swal.close()
          } catch (err) {
            console.log(err.response.data.errors)
            const errMsg = err.response.data.errors[0]

            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: errMsg
            })
          }
        }
      }
    ])
  },
  async deleteBanner (context, id) {
    try {
      const confirmation = await Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      if (confirmation.isConfirmed) {
        const { data } = await axios({
          method: 'DELETE',
          url: `/banner/${id}`,
          headers: { access_token: localStorage.getItem('access_token') }
        })

        this.dispatch('fetchBanners')
        console.log(data.message)
      }
    } catch (err) {
      console.log(err.response.data.errors)
      const errMsg = err.response.data.errors

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: errMsg
      })
    }
  }
}
