<template>
  <div class="col-3">
    <div class="card">
        <img class="card-img-top" :src="banner.image_url" alt="Card image cap" />
        <div class="card-body">
        <h5 class="card-title">{{ banner.title }}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Status : {{ banner.status }}</li>
        </ul>
        <div class="card-body">
        <a href="#" class="card-link" id="edit-text" @click.prevent="toEdit">Edit Item</a>
        <a href="#" class="card-link" id="delete-text" @click.prevent="deleteBanner(banner.id)">Delete Item</a>
        </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'BannerCard',
  props: ['banner'],
  methods: {
    toEdit () {
      this.$router.push('/banner/' + this.banner.id)
    },
    deleteBanner (payload) {
      const id = payload
      this.$store.dispatch('deleteBanner', id)
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
