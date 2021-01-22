<template>
  <div
    class="container-fluid d-flex flex-column flex-sm-row justify-content-between mt-3"
    style="min-height: 100vh;"
  >
    <div>
      <ul class="flex-column nav container">
        <li class="nav-item">
          <router-link to="/" style="text-decoration: none;">
            <a class="nav-link">Product</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addproduct" style="text-decoration: none;">
            <a class="nav-link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-square mx-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                /></svg
            > Add Product</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/banners" style="text-decoration: none;">
            <a class="nav-link">Banner</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addbanner" style="text-decoration: none;">
            <a class="nav-link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-square mx-1"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                /></svg
            > Add Banner</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="logout"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-left mx-1"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
            Log Out</a
          >
        </li>
      </ul>
    </div>
    <div class="container d-flex flex-column align-items-center">
      <router-view
        :products="products"
        :categories="categories"
        :banners="banners"
        :editProduct="editProduct"
        :editBanner="editBanner"
        @postProduct="postProduct"
        @postCategory="postCategory"
        @postBanner="postBanner"
        @fetchEditProduct="fetchEditProduct"
        @fetchEditBanner="fetchEditBanner"
        @putProduct="putProduct"
        @putBanner="putBanner"
        @deleteProduct="deleteProduct"
        @deleteCategory="deleteCategory"
        @deleteBanner="deleteBanner"
      />
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Home',
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  },
  computed: {
    products () {
      return this.$store.state.product
    },
    categories () {
      return this.$store.state.category
    },
    banners () {
      return this.$store.state.banner
    },
    editProduct () {
      return this.$store.state.editProduct
    },
    editBanner () {
      return this.$store.state.editBanner
    }
  },
  methods: {
    refresh () {
      this.$store.dispatch('fetchProduct')
      this.$store.dispatch('fetchCategory')
      this.$store.dispatch('fetchBanner')
    },
    fetchEditProduct (id) {
      this.$store.dispatch('fetchEditProduct', id)
    },
    fetchEditBanner (id) {
      this.$store.dispatch('fetchEditBanner', id)
    },
    putProduct () {
      this.$store.dispatch('putProduct')
        .then(() => {
          this.refresh()
          this.$router.push({ path: '/' })
        })
        .catch((err) => {
          swal(err.response.data.msg.join(','), '', 'error')
        })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(() => {
          this.refresh()
        })
        .catch((err) => {
          throw err
        })
    },
    postProduct (payload) {
      this.$store.dispatch('postProduct', payload)
        .then(() => {
          this.refresh()
          this.$router.push({ path: '/' })
        })
        .catch((err) => {
          swal(err.response.data.msg.join(','), '', 'error')
        })
    },
    postCategory (name) {
      this.$store.dispatch('postCategory', name)
        .then(() => {
          this.refresh()
        })
        .catch((err) => {
          swal(err.response.data.msg.join(','), '', 'error')
        })
    },
    deleteCategory (id) {
      this.$store.dispatch('deleteCategory', id)
        .then(() => {
          this.refresh()
        })
        .catch((err) => {
          throw err
        })
    },
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
    putBanner () {
      this.$store.dispatch('putBanner')
        .then(() => {
          this.refresh()
          this.$router.push({ path: '/banners' })
        })
        .catch((err) => {
          swal(err.response.data.msg.join(','), '', 'error')
        })
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
        .then(() => {
          this.refresh()
        })
        .catch((err) => {
          throw err
        })
    },
    postBanner (payload) {
      this.$store.dispatch('postBanner', payload)
        .then(() => {
          this.refresh()
          this.$router.push({ path: '/banners' })
        })
        .catch((err) => {
          swal(err.response.data.msg.join(','), '', 'error')
        })
    }
  },
  created () {
    this.refresh()
  }
}
</script>
