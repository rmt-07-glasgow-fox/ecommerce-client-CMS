<template>
  <div id="nav">
    <h3>Welcome, {{ username }}!</h3>
    <button class='btn btn-sm btn-outline-danger mb-5' @click='logout'>Logout</button>
    <div class='row justify-content-end'>
      <button class="btn btn-sm btn-outline-primary mb-3" @click='toAddProductPage'>Add a product</button>
    </div>
    <div class='row'>
      <select id="inputState" class="form-control mb-4" v-model='category'>
        <option selected>Choose a category...</option>
        <option value='all'>All categories</option>
        <option v-for='(category, idx) in categories' :key='idx' :value='category'>{{ category }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category: ''
    }
  },
  watch: {
    category (newVal) {
      this.$store.commit('changeCategory', newVal)
    },
    errors: function (val, oldVal) {
      if (val.length > 0) {
        this.$swal.fire({
          icon: 'error',
          title: 'Please try again',
          text: this.errors,
          footer: '<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400" target="_blank">400 Bad request</a>'
        })
      }
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    toAddProductPage () {
      this.$router.push('/addproduct')
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>
