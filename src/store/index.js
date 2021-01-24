import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios'
import moduleProduct from '@/store/moduleProduct.js'
import moduleBanner from '@/store/moduleBanner.js'
import moduleCategory from '@/store/moduleCategory.js'
import Swal from 'sweetalert2'

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
    },
    toastMsg (context, payload) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({ icon: payload.icon, title: payload.title })
    }
  },
  modules: {
    mProducts: moduleProduct,
    mBanners: moduleBanner,
    mCategories: moduleCategory
  }
})
