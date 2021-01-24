import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import axios2 from 'axios'
import router from '../router/index.js'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    banner: [],
    category: '',
    bannerStatus: 'All',
    images: []
  },
  mutations: {
    passingProducts (state, payload) {
      state.products = payload
    },
    passingCategories (state, payload) {
      state.categories = payload
    },
    changeCategory (state, payload) {
      state.category = payload
    },
    changeBannerStatus (state, payload) {
      state.bannerStatus = payload
    },
    passingBanner (state, payload) {
      state.banner = payload
    },
    passingImages (state, payload) {
      state.images = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push({ path: 'Home' })
          Swal.fire({
            title: 'Welcome',
            width: 300,
            padding: '1em',
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err)
          const errors = err.response.data.errors
          errors.forEach((element) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    },
    getProducts (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        context.commit('passingProducts', response.data)
      }).catch(err => {
        console.log(err.response.data.errors)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error while getting product list',
          footer: '<a >This might be caused by bad request</a>'
        })
      })
    },
    getBanner (context) {
      axios({
        method: 'get',
        url: '/banner',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        context.commit('passingBanner', response.data)
      }).catch(err => {
        console.log(err.response.data.errors)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error while getting banner list',
          footer: '<a >This might be caused by bad request</a>'
        })
      })
    },
    getCategories (context) {
      axios({
        method: 'get',
        url: '/categories',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        context.commit('passingCategories', response.data)
      }).catch(err => {
        console.log(err.response.data.errors)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error while getting categories list',
          footer: '<a >This might be caused by bad request</a>'
        })
      })
    },
    addProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'post',
        url: '/products',
        data: {
          name: payload[0],
          description: payload[1],
          price: payload[2],
          stock: payload[3],
          image_url: payload[4],
          categoryId: 1
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          this.dispatch('getProducts')
          const answers = JSON.stringify(payload)
          Swal.fire({
            title: 'Aircraft Added!',
            html: `
              Your Input:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Nice!'
          })
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    },
    addBanner (context, payload) {
      console.log(payload)
      axios({
        method: 'post',
        url: '/banner',
        data: {
          title: payload[0],
          status: true,
          image_url: payload[1]
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          this.dispatch('getBanner')
          const answers = JSON.stringify(payload)
          Swal.fire({
            title: 'Banner Added!',
            html: `
              Your Input:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Nice!'
          })
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    },
    delProduct (context, payload) {
      const id = payload
      axios({
        method: 'delete',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Aircraft Deleted Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.dispatch('getProducts')
      }).catch(err => {
        const errors = err.response.data.errors
        errors.forEach(element => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${element}`,
            footer: '<a >please follow the rules</a>'
          })
        })
      })
    },
    delBanner (context, payload) {
      const id = payload
      axios({
        method: 'delete',
        url: `/banner/${id}`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Banner Deleted Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.dispatch('getBanner')
      }).catch(err => {
        const errors = err.response.data.errors
        errors.forEach(element => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${element}`,
            footer: '<a >please follow the rules</a>'
          })
        })
      })
    },
    updateProduct (context, payload) {
      const id = payload.id
      console.log(payload)
      axios({
        method: 'put',
        url: `/products/${id}`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          description: payload.description,
          categoryId: payload.categoryId
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success Updating Aircraft Data',
          showConfirmButton: false,
          timer: 1500
        })
        // console.log(response);
        this.dispatch('getProducts')
      }).catch(err => {
        const errors = err.response.data.errors
        errors.forEach(element => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${element}`,
            footer: '<a >please follow the rules</a>'
          })
        })
      })
    },
    updateBanner (context, payload) {
      const id = payload.id
      axios({
        method: 'put',
        url: `/banner/${id}`,
        data: {
          title: payload.name,
          image_url: payload.image_url,
          status: payload.status
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Success Updating Banner Data',
          showConfirmButton: false,
          timer: 1500
        })
        // console.log(response);
        this.dispatch('getBanner')
      }).catch(err => {
        const errors = err.response.data.errors
        errors.forEach(element => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${element}`,
            footer: '<a >please follow the rules</a>'
          })
        })
      })
    },
    patchProduct (context, payload) {
      const { id, categoryId } = payload
      axios({
        method: 'patch',
        url: `/products/${id}`,
        data: {
          categoryId: categoryId
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Aircraft data updated',
          showConfirmButton: false,
          timer: 1500
        })
        this.dispatch('getProducts')
      }).catch(err => {
        const errors = err.response.data.errors
        errors.forEach(element => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${element}`,
            footer: '<a >please follow the rules</a>'
          })
        })
      })
    },
    patchBanner (context, payload) {
      const { id, status } = payload
      axios({
        method: 'patch',
        url: `/banner/${id}`,
        data: {
          status: status
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Banner data updated',
          showConfirmButton: false,
          timer: 1500
        })
        this.dispatch('getBanner')
      }).catch(err => {
        const errors = err.response.data.errors
        errors.forEach(element => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${element}`,
            footer: '<a >please follow the rules</a>'
          })
        })
      })
    },
    logout (context) {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          router.push({ path: 'Login' })
          Swal.fire(
            'Logged out!',
            'You had been log out.',
            'success'
          )
        }
      })
    },
    uploadImage (context, payload) {
      console.log(payload)
      const body = new FormData()
      body.set('key', '2c1104ad2dd7dc1fbcc634eb5692ea0e')
      body.append('image', payload)
      axios2({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
      }).this((data) => {
        console.log(data.data)
      }).catch(err => {
        console.log(err)
      })
    },
    route (context, payload) {
      router.push({ path: payload })
    }
  },
  modules: {
  },
  getters: {
    filterCategory: state => {
      if (state.category === 'All' || state.category === '') {
        return state.products
      } else {
        return state.products.filter((value) => {
          return value.categoryId === state.category
        })
      }
    },
    filterBanner: state => {
      if (state.bannerStatus === 'All' || state.bannerStatus === '') {
        return state.banner
      } else if (state.bannerStatus === 'True') {
        return state.banner.filter((value) => {
          return value.status === true
        })
      } else if (state.bannerStatus === 'False') {
        return state.banner.filter((value) => {
          return value.status === false
        })
      }
    },
    bannerImages: state => {
      const raw = state.banner.filter((value) => {
        return value.status === true
      })
      const data = []
      raw.forEach(element => {
        data.push(element.image_url)
      })
      return data
    }
  }
})
