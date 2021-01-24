<template>
  <main
    class="col-md-9 col-lg-10 px-md-4"
    style="margin-left: auto; margin-right: auto"
  >
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Dashboard</h1>
    </div>
    <h1>Welcome back, Funorama staff!</h1>
    <div class="container-fluid" style="margin-top: 32px">
      <div class="row">
        <div class="col-4">
          <div class="card bg-primary text-white">
            <div class="card-header">Product</div>

            <div class="card-body">
              <h5 class="card-title">
                Click the product Icon on navbar to see product
              </h5>

              <!-- <h5 class="card-title">How many products that we have?</h5>
              <p class="card-text">
                Product: <b>{{ this.Products }} </b> items.
              </p>
              <p class="card-text">
                Stock: <b>{{ this.ProductStocks }} </b> items (combined every
                product).
              </p> -->
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card bg-success text-white">
            <div class="card-header">Category</div>
            <div class="card-body">
              <h5 class="card-title">
                Click the category Icon on navbar to see category
              </h5>
              <!-- <h5 class="card-title">How many categories that we have?</h5>
              <p class="card-text">
                We have <b>{{ this.Categories }}</b> categories right now.
              </p> -->
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card bg-warning text-dark">
            <div class="card-header">Banner</div>
            <div class="card-body">
              <h5 class="card-title">
                Click the banner Icon on navbar to see banner
              </h5>
              <!-- <h5 class="card-title">How many banners that we have?</h5>
              <p class="card-text">We have 0 banners right now.</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Dashboard'
  // Error at first but and then can be executed
  // data () {
  //   return {
  //     productStocks: 0,
  //     products: 0,
  //     categories: 0
  //   }
  // },
  // methods: {
  //   fetchProducts () {
  //     this.$store.dispatch('fetchProducts')
  //   },
  //   fetchCategories () {
  //     this.$store.dispatch('fetchCategories')
  //   }
  // },
  // computed: {
  //   ProductStocks () {
  //     let total = 0
  //     this.$store.state.product.products.forEach(e => {
  //       total += e.stock
  //     })
  //     return total
  //   },
  //   Products () {
  //     let total = 0
  //     this.$store.state.product.products.forEach(e => {
  //       if (e.name) {
  //         total++
  //       }
  //     })
  //     return total
  //   },
  //   Categories () {
  //     const categoryObj = this.$store.state.category.categories
  //     let total = 0
  //     categoryObj.forEach(e => {
  //       if (e.name) {
  //         total++
  //       }
  //     })
  //     return total
  //   }
  // },
  // created () {
  //   this.fetchProducts()
  //   this.fetchCategories()
  // }
}
</script>
