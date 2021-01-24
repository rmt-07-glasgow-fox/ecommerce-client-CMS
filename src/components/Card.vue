<template>
  <!-- Card Product -->
  <div class="col-3">
    <div class="card">
    <img
      :src="item.image_url"
      class="card-img-top"
      alt=""
      height="250px">
    <div class="card-body">
      <div style="text-align: center">
        <h5 class="card-title">{{item.name}}</h5>
      </div>
    <p class="card-text">IDR {{item.price}}</p>
    <p class="card-text text-muted">stock : {{item.stock}}</p>
    <div style="text-align: center;">
    <a href="#"
      class="btn btn-warning btn-sm-2"
      @click.prevent="getEdit(item.id)"
      style="margin-right: 10px; font-weight:bold;">
      Edit</a>
    <a
      href="#"
      class="btn btn-danger btn-sm-2"
      @click.prevent="destroy(item.id)"
      style="font-weight:bold;">
      Delete
      </a>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['item'],
  methods: {
    getEdit (id) {
      this.$store.dispatch('getEdit', id)
    },
    destroy (id) {
      this.$store.dispatch('destroy', id)
    }
  }
}
</script>

<style>

</style>
