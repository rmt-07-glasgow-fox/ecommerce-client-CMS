import axios from '@/api/axios.js'
import router from '@/router/index.js'
import Swal from 'sweetalert2'

export default {
  fetchCategories (context) {
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
              url: '/category'
            })

            context.commit('fetchCategories', data)
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
  fetchOneCategory (context, id) {
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
              url: `/category/${id}`,
              headers: { access_token: localStorage.getItem('access_token') }
            })

            context.commit('fetchOneCategory', data)
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
  addCategory (context, payload) {
    Swal.queue([
      {
        title: 'Adding category ...',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            await axios({
              method: 'POST',
              url: '/category',
              headers: { access_token: localStorage.getItem('access_token') },
              data: {
                name: payload.name
              }
            })

            this.dispatch('fetchCategories')
            router.replace('/admindashboard/categories')
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
  updateCategory (context, payload) {
    Swal.queue([
      {
        title: 'Editing category ...',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            await axios({
              method: 'PUT',
              url: `/category/${payload.id}`,
              headers: { access_token: localStorage.getItem('access_token') },
              data: {
                name: payload.name
              }
            })

            this.dispatch('fetchCategories')
            router.replace('/admindashboard/categories')
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
  async deleteCategory (context, id) {
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
          url: `/category/${id}`,
          headers: { access_token: localStorage.getItem('access_token') }
        })

        this.dispatch('fetchCategories')
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
