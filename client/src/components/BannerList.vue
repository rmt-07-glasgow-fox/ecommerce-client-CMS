<template>
  <div id="bannerlist">
    <div class="card mb-3">
      <img :src="banner.image_url" class="card-img-top imagine">
      <div class="card-body">
        <h5 class="card-title">{{ banner.title }}</h5>
        <p v-if="!banner.status">Status: <a @click.prevent="modifyStatus(true)" href="#" class="card-text ms-1 edit"><i class="fas fa-toggle-off"></i> <span class="off">OFF</span></a></p>
        <p v-else>Status: <a @click.prevent="modifyStatus(false)" href="#" class="card-text ms-1 edit"><i class="fas fa-toggle-on"></i> <span class="on">ON</span></a></p>
        <a @click.prevent="gotoEdit" href="#" class="card-text ms-1 edit"><small><i class="far fa-edit"></i> Edit</small></a>
        <a @click.prevent="deleteBanner" href="#" class="card-text ms-1 dlt"><small><i class="far fa-trash-alt"></i> Delete</small></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerList',
  props: ['banner'],
  data () {
    return {
      newData: {
        status: this.banner.status
      }
    }
  },
  methods: {
    modifyStatus (status) {
      const payload = {
        id: this.banner.id,
        data: { status }
      }
      this.$store.dispatch('modifyStatus', payload)
    },
    gotoEdit () {
      this.$router.push('/banner/edit/' + this.banner.id)
    },
    deleteBanner () {
      const id = this.banner.id
      this.$store.dispatch('deleteBanner', id)
    }
  }
}
</script>

<style scoped>
.on {
  color: green;
}
.off {
  color: grey;
}
.imagine {
  object-fit: cover;
  object-position: center;
  height: 250px;
  width: 800px;
}
a {
  text-decoration: none;
  list-style: none;
}

.edit {
  transition: .3s;
  color: rgb(33, 33, 168);
}

.edit:hover {
  font-size: 17px;
}

.dlt {
  transition: .3s;
  color: rgb(163, 22, 22);
}

.dlt:hover {
  font-size: 17px;
}
</style>
