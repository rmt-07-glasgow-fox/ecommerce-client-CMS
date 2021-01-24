import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios'
import moduleProduct from '@/store/moduleProduct.js'
import moduleBanner from '@/store/moduleBanner.js'
import moduleCategory from '@/store/moduleCategory.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true
  },
  mutations: {
    changeDrawer (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    login (context, data) {
      return axios({
        method: 'POST',
        url: '/login',
        data: data
      })
    }
  },
  modules: {
    mProducts: moduleProduct,
    mBanners: moduleBanner,
    mCategories: moduleCategory
  }
})
