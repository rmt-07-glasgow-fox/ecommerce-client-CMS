import router from '@/router'
import axios from '@/api/axios'
import Swal from 'sweetalert2'

const moduleProduct = {
  state: () => ({
    products: [],
    product: {}
  }),
  mutations: {
    fetchProducts (state, products) {
      state.products = products
    },
    mutateProduct (state, product) {
      state.product = product
    },
    updateStock (state, data) {
      router.name !== 'Products' ? state.product.stock = data.stock
        : state.products.map(el => (el.id === data.id) && (el.stock === data.stock))
    }
  },
  actions: {
    getAllProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('fetchProducts', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    getOneProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('mutateProduct', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    createProduct (context, data) {
      const newProduct = data.product
      newProduct.CategoryId = data.selectedCategory.id

      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: newProduct
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Detail Product', params: { id: data.id } })
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload.data
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Detail Product' })
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    deleteProduct (context, id) {
      console.log(id, '????')
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    //
    updateStock (context, data) {
      axios({
        method: 'PATCH',
        url: '/products/' + data.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: { stock: data.stock }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('updateStock', data)
        })
        .catch(err => {
          console.log(err.response.data)
          const msg = err.response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    // MODAL
    deleteProductModal (context, id) {
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
          context.dispatch('deleteProduct', id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          router.push({ name: 'Products' })
        }
      })
    },
    async updateStockModal (context, data) { // with swal
      const { value: stock } = await Swal.fire({
        title: 'Add stock',
        input: 'number',
        inputAttributes: {
          min: 1
        },
        inputLabel: 'Your current stock is ' + data.currentStock,
        inputPlaceholder: 'Add your stock'
      })
      if (stock) {
        context.dispatch('updateStock', {
          id: data.id,
          stock: +data.currentStock + +stock
        })
        Swal.fire(`Stock update to: ${+data.currentStock + +stock}`)
      }
    }
  },
  getters: {
  }
}

export default moduleProduct
