<template>
<div class="container">
    <div class="form-edit">
                <form>
                    <div class="edit-form-title" style="margin-bottom: 20px;">
                        <h2>Edit Material Here!</h2>
                    </div>
                    <div class="form-group">
                        <label for="name" class="label-text">Name :</label>
                        <input type="text" class="form-control" id="edit-name" v-model="material.name" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="image_url" class="label-text">Image URL :</label>
                        <input type="url" class="form-control" id="edit-image_url" v-model="material.image_url" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="category" class="label-text">Category :</label>
                        <input type="text" class="form-control" id="edit-category" v-model="material.category" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="price" class="label-text">Price :</label>
                        <input type="number" class="form-control" id="edit-price" v-model="material.price" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="stock" class="label-text">Stock :</label>
                        <input type="number" class="form-control" id="edit-stock" v-model="material.stock" aria-describedby="emailHelp">
                    </div>
                    <div class="submit-edit">
                        <button type="submit" class="btn btn-warning" @click.prevent="editMaterial">Edit</button>
                        <button type="submit" class="btn btn-danger" @click.prevent="toMaterial">Cancel</button>
                    </div>

                </form>
            </div>
</div>
</template>

<script>

export default {
  name: 'EditMaterial',
  data () {
    return {
      material: {
        name: '',
        image_url: '',
        category: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    populateForm () {
      const id = this.$route.params.id
      this.$store.dispatch('populateMaterial', id)
        .then(({ data }) => {
          this.material = data
        })
        .catch(err => console.log(err))
    },
    toMaterial () {
      this.$router.push('/Material')
    },
    editMaterial () {
      const id = this.$route.params.id
      this.$store.commit('insertMaterial', this.material)
      this.$store.dispatch('editMaterial', id)
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
