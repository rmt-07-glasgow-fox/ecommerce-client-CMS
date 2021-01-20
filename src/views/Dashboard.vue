<template>
  <div :class="['d-flex', toggled ? '' : 'toggled']" id="wrapper">
    <sidebar />
    <div id="page-content-wrapper">
      <navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/layouts/Sidebar.vue';
import Navbar from '../components/layouts/Navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Navbar,
  },
  methods: {},
  computed: {
    toggled() {
      return this.$store.getters.toggled;
    },
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}

#page-content-wrapper {
  min-width: 100vw;
}
#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}
@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }
  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>
