<template>
<div class="container">
    <div class="form-edit">
                <form>
                    <div class="edit-form-title" style="margin-bottom: 20px;">
                        <h2>Edit Banner Here!</h2>
                    </div>
                    <div class="form-group">
                        <label for="title" class="label-text">Title :</label>
                        <input type="text" class="form-control" id="edit-title" v-model="banner.title" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="image_url" class="label-text">Image URL :</label>
                        <input type="url" class="form-control" id="edit-image_url" v-model="banner.image_url" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="status" class="label-text">Status :</label>
                        <input type="text" class="form-control" id="edit-status" v-model="banner.status" aria-describedby="emailHelp">
                    </div>
                    <div class="submit-edit">
                        <button type="submit" class="btn btn-warning" @click.prevent="editBanner">Edit</button>
                        <button type="submit" class="btn btn-danger" @click.prevent="toBanner">Cancel</button>
                    </div>

                </form>
            </div>
</div>
</template>

<script>

export default {
  name: 'EditBanner',
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
    populateForm () {
      const id = this.$route.params.id
      this.$store.dispatch('populateBanner', id)
        .then(({ data }) => {
          this.banner = data
        })
        .catch(err => console.log(err))
    },
    toBanner () {
      this.$router.push('/banner')
    },
    editBanner () {
      const id = this.$route.params.id
      this.$store.commit('insertBanner', this.banner)
      this.$store.dispatch('editBanner', id)
    }
  },
  created () {
    this.populateForm()
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

.form-edit {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 500px;
    margin-top: 100px ;
    margin-bottom: 100px;
}

.edit-form-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: white;
}

.label-text {
    color: white;
}

.submit-edit {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
}
</style>
