import Vue from 'vue'
import axios from '../api/axios'
import router from '../router'

const categoryStore = {
  state: () => ({
    categories: [],
    category: ''
  }),
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    },
    setCategoryById (state, payload) {
      state.category = payload
    }
  },
  actions: {
    fetchCategories (context) {
      axios({
        method: 'GET',
        url: 'categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setCategories', res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleAddCategory (context, payload) {
      axios({
        method: 'POST',
        url: 'categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name
        }
      })
        .then(res => {
          router.push('/categories')
          this.dispatch('fetchCategories')
          Vue.swal({
            title: 'Success',
            text: 'Your category has been added!',
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          })
        })
        .catch(err => {
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    },
    getCategoryById (context, payload) {
      axios({
        method: 'GET',
        url: 'categories/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setCategoryById', res.data)
          router.push('/editcategory/' + payload)
        })
        .catch(err => {
          if (err.response.status === 404) {
            router.push('/datanotfound')
          }
          console.log(err.response)
        })
    },
    handleUpdateCategoryById (context, payload) {
      axios({
        method: 'PUT',
        url: 'categories/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name
        }
      })
        .then(res => {
          console.log(res.data)
          router.push('/categories')
          this.dispatch('fetchCategories')
          Vue.swal({
            title: 'Success',
            text: res.data.message,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
          })
        })
        .catch(err => {
          console.log(err.response)
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    },
    deleteCategoryById (context, payload) {
      Vue.swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return axios({
              method: 'DELETE',
              url: 'categories/' + payload,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
          }
        })
        .then(res => {
          this.dispatch('fetchCategories')
          Vue.swal(
            'Deleted!',
            res.data.message,
            'success'
          )
        })
        .catch(err => {
          const errors = err.response.data.errors.join('\n')
          Vue.swal({
            title: 'Oopsie!',
            text: errors,
            icon: 'error'
          })
        })
    }
  }
}

export default categoryStore
