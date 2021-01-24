import Vue from 'vue'
import Vuex from 'vuex'
import ecommerceServer from '../api/ecommerceServer'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentList: [],
    singleContent: {},
    bannerList: [],
    singleBanner: {},
    bodyPage: 'content'
  },
  mutations: {
    addContentList (state, payload) {
      state.contentList = payload
    },
    addOneContentList (state, payload) {
      state.singleContent = payload
    },
    addBannerList (state, payload) {
      state.bannerList = payload
    },
    addOneBannerList (state, payload) {
      state.singleBanner = payload
    },
    changeBody (state, payload) {
      state.bodyPage = payload
    },
    checkAuth (context) {
      if (!localStorage.getItem('access_token')) {
        router.push('/')
      }
    }
  },
  actions: {
    fetchContentList (context) {
      ecommerceServer
        .get('/contents', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('addContentList', data)
        })
        .catch(err => {
          console.log(err, 'INI')
        })
    },
    fetchOneData (context, id) {
      ecommerceServer
        .get('/contents/' + id, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('addOneContentList', data)
        })
        .catch(err => {
          console.log(err, 'INI')
        })
    },
    addNewContent (context, newContent) {
      ecommerceServer
        .post('/contents', newContent, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          console.log('masuk new content')
          router.push('/dashboard')
        })
        .catch(err => {
          console.log('gagagagaga')
          console.log(err)
        })
    },
    addNewContentImage (context, newImage) {
      console.log('masuk conten image')
      ecommerceServer
        .post('/contents/image', newImage, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          console.log('berahsil keluar data')
          console.log(data, 'iiii')
          let newContent = {}
          newContent = {
            name: localStorage.getItem('name'),
            category: localStorage.getItem('category'),
            stock: localStorage.getItem('stock'),
            price: localStorage.getItem('price'),
            imageUrl: data.imageUrl
          }
          this.dispatch('addNewContent', newContent)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteContent (context, deleteContentId) {
      ecommerceServer
        .delete('/contents/' + deleteContentId, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.dispatch('fetchContentList')
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitEditContent (context, editContent) {
      ecommerceServer
        .put('/contents/' + editContent.id, editContent, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBannerList (context) {
      ecommerceServer
        .get('/banners', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('addBannerList', data)
        })
        .catch(err => {
          console.log(err, 'INI')
        })
    },
    fetchOneDataBanner  (context, id) {
      ecommerceServer
        .get('/banners/' + id, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('addOneBannerList', data)
        })
        .catch(err => {
          console.log(err, 'INI')
        })
    },
    addNewBanner (context, newBanner) {
      ecommerceServer
        .post('/banners', newBanner, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addNewBannerImage (context, newImage) {
      console.log('masuk banner image')
      ecommerceServer
        .post('/banners/image', newImage, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          console.log('berahsil keluar data')
          console.log(data, 'iiii')
          let newBanner = {}
          newBanner = {
            title: localStorage.getItem('title'),
            status: localStorage.getItem('status'),
            imageUrl: data.imageUrl
          }
          this.dispatch('addNewBanner', newBanner)
        })
        .catch(err => {
          console.log(err, 'SALAH NI')
        })
    },
    deleteBanner (context, deleteBannerId) {
      ecommerceServer
        .delete('/banners/' + deleteBannerId, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.dispatch('fetchBannerList')
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitEditBanner (context, editBanner) {
      ecommerceServer
        .put('/banners/' + editBanner.id, editBanner, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginCommerce (context, user) {
      ecommerceServer
        .post('/login', user)
        .then((user) => {
          router.push('/dashboard')
          console.log(user)
          localStorage.setItem('access_token', user.data.access_token)
        })
        .catch(err => {
          console.log(err, 'INI')
        })
    }
  },
  modules: {
  }
})
