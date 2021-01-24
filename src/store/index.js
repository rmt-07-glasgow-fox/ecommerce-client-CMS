import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth/index.js'
import product from './modules/product/index.js'
import category from './modules/category/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    product,
    category
  }
})
