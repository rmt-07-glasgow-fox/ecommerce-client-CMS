import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/instance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    isAdd: false,
    isUpdate: false,
    askDelete: false,
    form_add: {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      status: true
    },
    form_update: {

    }
  },
  mutations: {
    getList (state, payload) {
      state.products = payload
    },
    changeAdd (state, payload) {
      state.isAdd = payload
    },
    changeUpdate (state, payload) {
      state.isUpdate = payload
    },
    isDelete (state, payload) {
      state.askDelete = payload
    },
    getOneProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    listProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('getList', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      // console.log(payload, '<< payload')
      const { name, imageUrl, stock, status, price } = payload

      axios({
        method: 'POST',
        url: '/products',
        data: { name, imageUrl, stock, status, price },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.commit('changeAdd', false)
          // router.push('/products')
          this.listProducts()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchOneProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('getOneProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateStatus (context, payload) {
      const { status, id } = payload
      axios({
        method: 'PATCH',
        url: `/products/${id}`,
        data: { status },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.commit('isDelete', false)
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      const { name, imageUrl, price, stock } = payload

      axios({
        method: 'PUT',
        url: '/products',
        data: { name, imageUrl, price, stock },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginUser (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: '/login',
        data: { email, password }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    registerUser (context, payload) {
      const { username, email, password } = payload
      axios({
        method: 'POST',
        url: '/register',
        data: { username, email, password }
      })
        .then(({ data }) => {
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
    // checkAuth () {
    //   console.log('ini akses token', localStorage.access_token)
    //   if (localStorage.access_token) {
    //     router.push('/products')
    //   } else {
    //     router.push('/')
    //   }
    // }
  }
  // getters: {
  //   kursRupiah (payload) {
  //     return payload.toLocaleString('en-ID', { style: 'currency', currency: 'IDR' })
  //   }
  // }
})
