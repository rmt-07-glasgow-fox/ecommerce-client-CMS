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
        brandImagePath: './',
        brandImage: require('../assets/logo.png'),
        brandImageAltText: 'brand-image',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        tooltipPlacement: 'bottom',
        menuOptionsRight: [
          {
            type: 'button',
            text: 'Login',
            path: '/login',
            iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .vnb .button-red {
    background: #ff3b30;
  }

  .vnb .button-red:hover {
    background: #fc0d00;
  }
</style>
