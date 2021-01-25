<template>
  <div class="container">
      <div class="form-add">
                <form>
                    <div class="add-form-title" style="margin-bottom: 20px;">
                        <h2>Add Banner Here!</h2>
                    </div>
                    <div class="form-group">
                        <label for="title" class="label-text">Title :</label>
                        <input type="text" class="form-control" id="add-title" v-model="banner.title"
                            aria-describedby="emailHelp" placeholder="Banner Title">
                    </div>
                    <div class="form-group">
                        <label for="image_url" class="label-text">Image URL :</label>
                        <input type="url" class="form-control" id="add-image_url" v-model="banner.image_url"
                            aria-describedby="emailHelp" placeholder="Image URL">
                    </div>
                    <div class="form-group">
                        <label for="status" class="label-text">Status :</label>
                        <input type="text" class="form-control" id="add-status" v-model="banner.status"
                            aria-describedby="emailHelp" placeholder="Banner Status">
                    </div>
                    <div class="submit-add">
                        <button type="submit" class="btn btn-warning" @click.prevent="addBanner">Add</button>
                        <button type="submit" class="btn btn-danger" @click.prevent="toBanner">Cancel</button>
                    </div>

                </form>
            </div>
  </div>
</template>

<script>

export default {
  name: 'AddBanner',
  data () {
    return {
      banner: {
        title: '',
        image_url: '',
        status: ''
      }
    }
  },
  methods: {
    toBanner () {
      this.$router.push('/banner')
    },
    addBanner () {
      this.$store.dispatch('addBanner', this.banner)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-content: center;
}

.form-add {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 500px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.add-form-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: white;
}

.label-text {
    color: white;
}

.submit-add {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
}
</style>
