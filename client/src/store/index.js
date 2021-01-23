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
    category: ''
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
    getBanner (context, payload) {
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
    logout (context) {
      localStorage.clear()
      router.push({ path: 'Login' })
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
    }
  }
})
