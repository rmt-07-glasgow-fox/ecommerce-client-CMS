import Swal from 'sweetalert2'

import axios from '@/api/axios.js'
import router from '@/router/index.js'

export default {
  async getUserInfo (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/getuser',
        headers: { access_token: localStorage.getItem('access_token') }
      })

      context.commit('getUserInfo', data)
    } catch (err) {
      console.log(err)
    }
  },
  loginAdmin (context, payload) {
    Swal.queue([
      {
        title: 'Now loading...',
        text: 'Get your coffee because we are logging in you up!',
        showConfirmButton: false,
        onOpen: async () => {
          Swal.showLoading()
          try {
            const { data } = await axios({
              method: 'POST',
              url: '/loginadmin',
              data: {
                email: payload.email,
                password: payload.password
              }
            })

            localStorage.setItem('SECRET_MODE', '4dm1nm0d31stru3')
            localStorage.setItem('access_token', data.access_token)
            router.push('/admindashboard')
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
  logout (context) {
    localStorage.clear()
    router.push('/')
  }
}
