<template>
  <div class="container">
      <div class="form-add">
                <form>
                    <div class="add-form-title" style="margin-bottom: 20px;">
                        <h2>Add Material Here!</h2>
                    </div>
                    <div class="form-group">
                        <label for="name" class="label-text">Name :</label>
                        <input type="text" class="form-control" id="add-name" v-model="material.name"
                            aria-describedby="emailHelp" placeholder="Material Name">
                    </div>
                    <div class="form-group">
                        <label for="image_url" class="label-text">Image URL :</label>
                        <input type="url" class="form-control" id="add-image_url" v-model="material.image_url"
                            aria-describedby="emailHelp" placeholder="Image URL">
                    </div>
                    <div class="form-group">
                        <label for="category" class="label-text">Category :</label>
                        <input type="text" class="form-control" id="add-category" v-model="material.category"
                            aria-describedby="emailHelp" placeholder="Material Category">
                    </div>
                    <div class="form-group">
                        <label for="price" class="label-text">Price :</label>
                        <input type="number" class="form-control" id="add-price" v-model="material.price"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="stock" class="label-text">Stock :</label>
                        <input type="number" class="form-control" id="add-stock" v-model="material.stock"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="submit-add">
                        <button type="submit" class="btn btn-warning" @click.prevent="addMaterial">Add</button>
                        <button type="submit" class="btn btn-danger" @click.prevent="toMaterial">Cancel</button>
                    </div>

                </form>
            </div>
  </div>
</template>

<script>

export default {
  name: 'AddMaterial',
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
    toMaterial () {
      this.$router.push('/material')
    },
    addMaterial () {
      this.$store.dispatch('addMaterial', this.material)
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
