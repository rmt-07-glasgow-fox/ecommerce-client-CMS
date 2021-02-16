import Vue from 'vue'
import Vuex from 'vuex'
import ecommerceServer from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {
      Category: {}
    },
    categories: [],
    rows: 0,
    banners: [],
    banner: {}
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertProduct (state, payload) {
      state.product = payload
    },
    filteredProducts (state, payload) {
      state.products = state.products.filter(product => {
        if (product.id !== +payload) return product
      })
    },
    updatedProduct (state, payload) {
      state.products = state.products.map(product => {
        if (product.id === payload.id) return payload
        return product
      })
    },
    insertCategories (state, payload) {
      state.categories = payload
    },
    insertCategory (state, payload) {
      state.categories.push(payload)
    },
    updateCategory (state, payload) {
      state.categories = state.categories.filter(category => {
        if (category.id !== payload) return category
      })
    },
    updateErrorImage (state, payload) {
      state.products = state.products.map(product => {
        if (product.id === payload.id) {
          product.image_url = payload.defaultImg
          return product
        }
        return product
      })
    },
    insertUpdatedRows (state, payload) {
      state.rows = state.products.length
    },
    insertBanners (state, payload) {
      state.banners = payload
    },
    changeBannerStatus (state, payload) {
      state.banners = state.banners.map(banner => {
        if (payload.id === banner.id) return payload
        return banner
      })
    },
    deleteBanner (state, payload) {
      state.banners = state.banners.filter(banner => {
        if (banner.id !== payload) return banner
      })
    },
    insertBanner (state, payload) {
      state.banners.push(payload)
    },
    banner (state, payload) {
      state.banner = payload
    }
  },
  actions: {
    // Logged In
    isLoggedIn (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // Get All Products
    fetchProducts (context) {
      ecommerceServer({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
          context.commit('insertUpdatedRows')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // Get Single Product
    fetchProduct (context, payload) {
      ecommerceServer({
        method: 'GET',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // Update Product
    updateProduct (context, payload) {
      ecommerceServer({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // Add New Product
    addNewProduct (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // Updated Stock
    editStock (context, payload) {
      ecommerceServer({
        method: 'PATCH',
        url: '/products/stock/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: +payload.stock
        }
      })
        .then(({ data }) => {
          data.stock = +data.stock
          context.commit('updatedProduct', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // Change status
    changeStatusProduct (context, payload) {
      ecommerceServer({
        method: 'PATCH',
        url: '/products/status/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          status: payload.status
        }
      })
        .then(({ data }) => {
          context.commit('updatedProduct', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    // Deleted Product
    deleteProduct (context, payload) {
      ecommerceServer({
        method: 'DELETE',
        url: '/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.commit('filteredProducts', payload)
          context.commit('insertUpdatedRows')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchCategories (context) {
      ecommerceServer({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertCategories', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addCategory (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          categoryName: payload
        }
      })
        .then(({ data }) => {
          context.commit('insertCategory', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteCategory (context, payload) {
      ecommerceServer({
        method: 'DELETE',
        url: '/categories/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateCategory', payload)
          Swal.fire(
            'Deleted!',
            'Your category has been deleted.',
            'success'
          )
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'There is some product that still connected to this category. Please delete the product first!',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            showConfirmButton: false
          })
          console.log(err.response)
        })
    },
    fetchBanners (context, payload) {
      ecommerceServer({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanner (context, payload) {
      ecommerceServer({
        method: 'GET',
        url: '/banners/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('banner', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    changeBannerStatus (context, payload) {
      ecommerceServer({
        method: 'PATCH',
        url: '/banners/status/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          status: payload.status
        }
      })
        .then(({ data }) => {
          context.commit('changeBannerStatus', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteBanner (context, payload) {
      ecommerceServer({
        method: 'DELETE',
        url: '/banners/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('deleteBanner', payload)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addNewBanner (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/banners',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          router.push('/banners')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateBanner (context, payload) {
      ecommerceServer({
        method: 'PUT',
        url: '/banners/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          router.push('/banners')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
})
