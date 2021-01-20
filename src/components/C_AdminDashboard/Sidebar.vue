<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <user-info />

    <h6
      class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
    >
      <span>Menu</span>
      <a class="link-secondary" href="#" aria-label="Add a new report">
        <span data-feather="plus-circle"></span>
      </a>
    </h6>
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <span class="feather" v-html="iconSVG('home')"></span>
            Dashboard
          </a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link active" href="">
            <span class="feather" v-html="iconSVG('shopping-cart')"></span>
            Products
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <span class="feather" v-html="iconSVG('list')"></span>
            Categories
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <span class="feather" v-html="iconSVG('bookmark')"></span>
            Banners
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import feather from 'feather-icons'
import UserInfo from './UserInfo.vue'

export default {
  name: 'ADSidebar',
  components: {
    UserInfo
  },
  computed: {
    iconSVG (icon) {
      return icon => feather.icons[icon].toSvg({ height: '16px' })
    }
  }
}
</script>

<style scoped>
.feather {
  /* width: 16px;
  height: 16px; */
  vertical-align: text-bottom;
}

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>
