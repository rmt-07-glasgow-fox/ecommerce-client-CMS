<template>
  <nav
    class="navbar navbar-light shadow sticky-top"
    style="height: 56px; background-color: white"
  >
    <div class="container">
      <div style="width: 200px">
        <img src="@/assets/img_logoLineC.svg" alt="" height="24" />
      </div>
      <div class="row">
        <router-link to="/admindashboard" class="col navbar-icons">
          <home-icon size="1.5x"></home-icon>
          <hr class="navbar-hr" />
        </router-link>
        <router-link to="/admindashboard/products" class="col navbar-icons">
          <shopping-bag-icon size="1.5x"></shopping-bag-icon>
          <hr class="navbar-hr" />
        </router-link>
        <router-link to="/admindashboard/categories" class="col navbar-icons">
          <archive-icon size="1.5x"></archive-icon>
          <hr class="navbar-hr" />
        </router-link>
        <router-link to="/admindashboard/banners" class="col navbar-icons">
          <tag-icon size="1.5x"></tag-icon>
          <hr class="navbar-hr" />
        </router-link>
      </div>

      <div
        style="width: 200px; padding-left: 32px"
        class="row align-self-center"
      >
        <div
          class="col-3 align-self-center"
          style="padding: 0 0 0 0; margin-right: 0"
        >
          <img :src="userInfo.profpic" width="28" style="border-radius: 5rem" />
        </div>
        <div class="col-6 align-self-center" style="padding: 0 0 0 0">
          <h1
            style="
              font-size: 15px;
              margin: 0 32px 0 0;
              padding-right: 4px;
              text-align: center;
            "
          >
            {{ userInfo.firstname }}
          </h1>
        </div>
        <button
          class="btn btn-dark"
          style="
            border-radius: 50px;
            width: 38.77px;
            height: 38.77px;
            padding: 6px 0;
            margin-left: 3px;
            background-color: #d8dadf;
            color: black;
            border: 0;
          "
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <chevron-down-icon size="24"></chevron-down-icon>
        </button>
        <ul class="dropdown-menu dropdown-menu-end" style="width: 40px">
          <div id="user-info">
            <h6 class="dropdown-header user-info-name">
              {{ userInfo.firstname }} {{ userInfo.lastname }}
            </h6>
            <h6 class="dropdown-header user-info-mail">
              {{ userInfo.email }}
            </h6>
          </div>
          <!-- user-info// -->

          <div class="dropdown-divider btn-drop"></div>

          <a
            id="logout-btn"
            class="dropdown-item"
            href=""
            @click.prevent="logout"
            >Logout</a
          >

          <!-- user-info-section// -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { HomeIcon, ShoppingBagIcon, ArchiveIcon, TagIcon, ChevronDownIcon } from 'vue-feather-icons'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
    }
  },
  components: {
    HomeIcon,
    ShoppingBagIcon,
    ArchiveIcon,
    TagIcon,
    ChevronDownIcon
  },
  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style scoped>
.container {
  margin-left: 104px;
  margin-right: 104px;
}
.shadow {
  box-shadow: 0 0.05rem 0.2rem rgba(0, 0, 0, 0.05) !important;
}
.navbar-icons {
  margin: 0 8px;
  padding: 8px 1.6vw 0;
  border-radius: 8px;
}
.navbar-icons:hover {
  color: #e25641;
  background-color: #eeeeee;
}
.navbar-icons:hover .navbar-hr {
  color: #e25641;
  visibility: visible;
}
.navbar-hr {
  visibility: hidden;
  margin: 4px 0 0 0;
  padding: 0;
  border: 2px solid #e25641;
  opacity: 1;
}
.user-info-name {
  font-size: 1em;
  color: #2d7bf6;
  font-weight: 600;
}
.user-info-mail {
  font-size: 0.7rem;
  margin-top: -8px;
}
</style>
