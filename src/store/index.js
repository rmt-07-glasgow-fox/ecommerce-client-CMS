import Vue from 'vue'
import Vuex from 'vuex'
import ecommerceServer from '../api/ecommerce-server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    getProducts (context) {
      ecommerceServer.get('/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      return ecommerceServer.post('/login', {
        email: payload.email,
        password: payload.password
      })
    },
    addProduct (context, payload) {
      return ecommerceServer.post('/products', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      }
      )
    },
    deleteProduct (context, payload) {
      return ecommerceServer.delete('/products/' + payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    fetchProduct (context, payload) {
      return ecommerceServer.get('/products/' + payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editProduct (context, payload) {
      const id = payload.id
      const data = {
        name: payload.name,
        image_url: payload.image_url,
        price: payload.price,
        stock: payload.stock
      }
      return ecommerceServer.put('/products/' + id, data, {
        headers: {
          access_token: localStorage.access_token
        }
      }
      )
    }
  }
})
