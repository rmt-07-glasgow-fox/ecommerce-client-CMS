import axios from '@/api/axios.js'
import router from '@/router/index.js'
import Swal from 'sweetalert2'

export default {
  fetchProducts (context) {
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
              url: '/product'
            })

            context.commit('fetchProducts', data)
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
  fetchOneProduct (context, id) {
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
              url: `/product/${id}`,
              headers: { access_token: localStorage.getItem('access_token') }
            })

            context.commit('fetchOneProduct', data)
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
  addProduct (context, payload) {
    Swal.queue([
      {
        title: 'Adding product ...',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            await axios({
              method: 'POST',
              url: '/product',
              headers: {
                access_token: localStorage.getItem('access_token')
              },
              data: {
                name: payload.name,
                image_url: payload.image_url,
                price: Number(payload.price),
                stock: Number(payload.stock),
                CategoryId: Number(payload.CategoryId)
              }
            })

            this.dispatch('fetchProducts')
            router.replace('/admindashboard/products')
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
  updateProduct (context, payload) {
    Swal.queue([
      {
        title: 'Editing product ...',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            await axios({
              method: 'PUT',
              url: `/product/${payload.id}`,
              headers: { access_token: localStorage.getItem('access_token') },
              data: {
                name: payload.name,
                image_url: payload.image_url,
                price: Number(payload.price),
                stock: Number(payload.stock),
                CategoryId: Number(payload.CategoryId)
              }
            })

            this.dispatch('fetchProducts')
            router.replace('/admindashboard/products')
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
  async deleteProduct (context, id) {
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
          url: `/product/${id}`,
          headers: { access_token: localStorage.getItem('access_token') }
        })

        this.dispatch('fetchProducts')
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
