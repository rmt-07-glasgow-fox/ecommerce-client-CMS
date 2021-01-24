import axios from '@/api/axios'
import Swal from 'sweetalert2'

const moduleCategory = {
  state: () => ({
    categories: [],
    category: {}
  }),
  mutations: {
    fetchCategories (state, categories) {
      state.categories = categories
    },
    mutateCategory (state, category) {
      state.category = category
    },
    newCategory (state, category) {
      state.categories.push(category)
    },
    deleteCategory (state, id) {
      state.categories.map((category, i) => {
        if (category.id === id) {
          state.categories.splice(i, 1)
        }
      })
    },
    updateCategory (state, data) {
      state.categories.map(category => {
        if (category.id === data.id) {
          category.name = data.name
        }
      })
    }
  },
  actions: {
    getAllCategories (context) {
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('fetchCategories', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    getOneCategory (context, id) {
      axios({
        method: 'GET',
        url: '/categories/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('mutateCategory', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    createCategory (context, data) {
      axios({
        method: 'POST',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        },
        data: data
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('newCategory', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    updateCategory (context, payload) {
      axios({
        method: 'PUT',
        url: '/categories/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: { name: payload.name }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('updateCategory', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    deleteCategory (context, id) {
      axios({
        method: 'DELETE',
        url: '/categories/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, ' ???')
          context.commit('deleteCategory', id)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    // Modal Swal
    async showFormCategory (context, data) {
      const { value: name } = await Swal.fire({
        title: 'Add Category',
        input: 'text',
        inputPlaceholder: 'Category Name',
        inputValue: data ? data.name : '',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        }
      })
      if (name) {
        data ? context.dispatch('updateCategory', { id: data.id, name: name })
          : context.dispatch('createCategory', { name })
      }
    },
    deleteCategoryModal (context, id) {
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
          context.dispatch('deleteCategory', id)
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
    getCategoryById: (state) => (id) => {
      return state.categories.find(el => el.id === id)
    }
  }
}

export default moduleCategory
