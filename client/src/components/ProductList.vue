<template>
  <div class="card mb-3 rounded" style="width: 800px;">
    <div class="row g-0 align-items-center">
      <div class="col-md-5">
        <img :src="product.image_url" height="160px" width="300px" style="object-fit: cover;">
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">Price: Rp. {{ product.price }}</p>
          <a @click.prevent="gotoEdit" href="#" class="card-text ms-1 edit"><small><i class="far fa-edit"></i> Edit</small></a>
          <a @click.prevent="gotoDelete" href="#" class="card-text ms-1 dlt"><small><i class="far fa-trash-alt"></i> Delete</small></a>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-body" style="text-align: right;">
          <p class="m-4">Stock: {{ product.stock }} Pcs</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    gotoEdit () {
      this.$router.push('/dashboard/edit/' + this.product.id)
    },
    gotoDelete () {
      const id = this.product.id
      console.log(id)
      this.$store.dispatch('gotoDelete', id)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  list-style: none;
}

.edit {
  color: rgb(33, 33, 168);
}

.edit:hover {
  font-size: 18px;
}

.dlt {
  color: rgb(163, 22, 22);
}

.dlt:hover {
  font-size: 18px;
}
</style>>
