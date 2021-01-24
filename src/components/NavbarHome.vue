<template>
  <vue-navigation-bar :options="navbarOptions" />
</template>

<script>
export default {
  data () {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: '/',
        brandImage: require('../assets/logo.png'),
        brandImageAltText: 'brand-image',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation'
      }
    }
  }
}
</script>

<style scoped>
  .vnb {
    background: none;
  }
  .vnb .button-red {
    background: #ff3b30;
  }

  .vnb .button-red:hover {
    background: #fc0d00;
  }
</style>
