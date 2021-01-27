<template>
  <div class="container mt-3">
    <div class="row text-center">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <h1 class="text-dark">Add a New Category</h1>
        <div class="card shadow mb-5">
          <div class="card-body">
            <form @submit.prevent="addCategory">
              <div class="form-group">
                <label>Category Name</label>
                <input type="text" placeholder="Product Name" class="form-control" v-model="name">
              </div>
              <div class="form-group">
                <label>Category Image Icon</label>
                <input type="text" placeholder="Category Image Icon (e.g. camera)" class="form-control" v-model="image" aria-describedby="fonthelp">
                <small id="fonthelp" class="form-text text-muted"><a href="https://fontawesome.com/icons?d=gallery&m=free" target="blank" class="linkhelp">Look Fontawesome For Reference</a></small>
                <hr>
                <p>Icon preview: <i :class="faClass"></i></p>
              </div>
              <button type="submit" class="btn btn-primary">Add Category</button>
              <a class="btn btn-warning ml-3 text-white" @click="back">Cancel</a>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCategory',
  data () {
    return {
      name: '',
      image: ''
    }
  },
  methods: {
    addCategory () {
      this.$store.dispatch('addCategory', { name: this.name, image: this.image })
      this.name = ''
      this.image = ''
    },
    back () {
      this.$router.go(-1)
    }
  },
  computed: {
    faClass () {
      return 'fas fa-' + this.image
    }
  }
}
</script>

<style>
  .linkhelp {
    color: blue;
  }
</style>
