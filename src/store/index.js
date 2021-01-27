import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productById: '',
    categories: [],
    categoryById: '',
    banners: [],
    bannerById: ''
  },
  mutations: {
    fetchAllProduct (state, payload) {
      state.products = payload
    },
    fetchProductById (state, payload) {
      state.productById = payload
    },
    fetchAllCategory (state, payload) {
      state.categories = payload
    },
    fetchCategoryById (state, payload) {
      state.categoryById = payload
    },
    fetchAllBanner (state, payload) {
      state.banners = payload
    },
    fetchBannerById (state, payload) {
      state.bannerById = payload
    }
  },
  actions: {
    // ! Product
    fetchAllProduct (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchAllProduct', data.products)
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    fetchProductById (context, id) {
      axios({
        method: 'get',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchProductById', data.product)
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products')
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    editProduct (context, payload) {
      const { id, name, price, stock, imageurl, CategoryId } = payload

      axios({
        method: 'put',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          price,
          stock,
          image_url: imageurl,
          CategoryId
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products').catch(() => {})
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    deleteProduct (context, id) {
      Vue.swal({
        title: 'Do you really want to delete this?',
        showCancelButton: true,
        confirmButtonText: 'Save'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'delete',
            url: '/products/' + id,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then(({ data }) => {
            context.dispatch('fetchAllProduct')
            router.push('/products').catch(() => {})
          }).catch(err => {
            if (err.response.data.message === 'Error Not Found') {
              router.push('/notfound')
            } else {
              Vue.swal({
                icon: 'error',
                title: 'Oops... Error',
                text: err.response.data.message
              })
            }
          })
        }
      })
    },
    deleteProductInCategory (context, payload) {
      const { idProduct, idCategory } = payload
      Vue.swal({
        title: 'Do you really want to delete this?',
        showCancelButton: true,
        confirmButtonText: 'Save'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'delete',
            url: '/products/' + idProduct,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then(({ data }) => {
            context.dispatch('fetchAllProduct')
            return axios({
              method: 'get',
              url: '/categories/' + idCategory,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
          }).then(({ data }) => {
            context.commit('fetchCategoryById', data.category)
          }).catch(err => {
            if (err.response.data.message === 'Error Not Found') {
              router.push('/notfound')
            } else {
              Vue.swal({
                icon: 'error',
                title: 'Oops... Error',
                text: err.response.data.message
              })
            }
          })
        }
      })
    },
    // Category
    fetchAllCategory (context) {
      axios({
        method: 'get',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchAllCategory', data.categories)
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    fetchCategoryById (context, id) {
      axios({
        method: 'get',
        url: '/categories/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchCategoryById', data.category)
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    addCategory (context, payload) {
      axios({
        method: 'post',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      }).then(({ data }) => {
        context.dispatch('fetchAllCategory')
        router.push('/categories').catch(() => {})
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    editCategory (context, payload) {
      const { id, name, image } = payload

      axios({
        method: 'put',
        url: '/categories/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          image
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllCategory')
        router.push('/categories').catch(() => {})
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    deleteCategory (context, payload) {
      Vue.swal({
        title: 'Do you really want to delete this?',
        showCancelButton: true,
        confirmButtonText: 'Save'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'delete',
            url: '/categories/' + payload,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then(({ data }) => {
            context.dispatch('fetchAllCategory')
            router.push('/categories').catch(() => {})
          }).catch(err => {
            if (err.response.data.message === 'Error Not Found') {
              router.push('/notfound')
            } else {
              Vue.swal({
                icon: 'error',
                title: 'Oops... Error',
                text: err.response.data.message
              })
            }
          })
        }
      })
    },
    // Banner
    fetchAllBanner (context) {
      axios({
        method: 'get',
        url: '/banners',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchAllBanner', data.banners)
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    fetchBannerById (context, id) {
      axios({
        method: 'get',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchBannerById', data.banner)
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    addBanner (context, payload) {
      axios({
        method: 'post',
        url: '/banners',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      }).then(({ data }) => {
        context.dispatch('fetchAllBanner')
        router.push('/banners').catch(() => {})
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    editBanner (context, payload) {
      const { id, title, status, imageurl } = payload

      axios({
        method: 'put',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title,
          status,
          image_url: imageurl
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllBanner')
        router.push('/banners').catch(() => {})
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound')
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops... Error',
            text: err.response.data.message
          })
        }
      })
    },
    deleteBanner (context, payload) {
      Vue.swal({
        title: 'Do you really want to delete this?',
        showCancelButton: true,
        confirmButtonText: 'Save'
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: 'delete',
            url: '/banners/' + payload,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then(({ data }) => {
            context.dispatch('fetchAllBanner')
            router.push('/banners').catch(() => {})
          }).catch(err => {
            if (err.response.data.message === 'Error Not Found') {
              router.push('/notfound')
            } else {
              Vue.swal({
                icon: 'error',
                title: 'Oops... Error',
                text: err.response.data.message
              })
            }
          })
        }
      })
    }
  },
  modules: {
  },
  getters: {
    getPrice: (state) => (id) => {
      for (let i = 0; i < state.products.length; i++) {
        const element = state.products[i]
        if (element.id === id) {
          return Number(element.price).toLocaleString()
        }
      }
    },
    getStock: (state) => (id) => {
      for (let i = 0; i < state.products.length; i++) {
        const element = state.products[i]
        if (element.id === id) {
          return Number(element.stock).toLocaleString()
        }
      }
    },
    totalProduct: (state) => {
      return state.products.length
    },
    totalCategory: (state) => {
      return state.categories.length
    },
    totalBanner: (state) => {
      return state.banners.length
    },
    totalBannerActive: (state) => {
      let output = 0
      for (let i = 0; i < state.banners.length; i++) {
        const element = state.banners[i]
        if (element.status === true) {
          output++
        }
      }
      return output
    },
    totalStockZero: (state) => {
      let output = 0
      for (let i = 0; i < state.products.length; i++) {
        const element = state.products[i]
        if (element.stock === 0) {
          output++
        }
      }
      return output
    }
  }
})
