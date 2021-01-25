<template>
  <div class="col-3">
    <div class="card">
        <img class="card-img-top" :src="material.image_url" alt="Card image cap" />
        <div class="card-body">
        <h5 class="card-title">{{ material.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Category : {{ material.category }}</li>
        <li class="list-group-item">Price : {{ material.price }}</li>
        <li class="list-group-item">Stock : {{ material.stock }}</li>
        </ul>
        <div class="card-body">
        <a href="#" class="card-link" id="edit-text" @click.prevent="toEdit">Edit Item</a>
        <a href="#" class="card-link" id="delete-text" @click.prevent="deleteMaterial(material.id)">Delete Item</a>
        </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'MaterialCard',
  props: ['material'],
  methods: {
    toEdit () {
      this.$router.push('/material/' + this.material.id)
    },
    deleteMaterial (payload) {
      const id = payload
      this.$store.dispatch('deleteMaterial', id)
    }
  }
}
</script>

<style scoped>
    #edit-text {
        color: saddlebrown;
    }

    #delete-text {
        color: red;
    }

    img {
      height: 200px;
      object-fit: cover;
    }

    .col-3 {
      margin-bottom: 40px;
    }

    .card-body {
      display: flex;
      justify-content: space-evenly;
      align-content: center;
    }
</style>
