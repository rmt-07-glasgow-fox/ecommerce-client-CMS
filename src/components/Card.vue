<template>
  <div class="col-3">
    <div class="card">
    <img :src="item.image_url" class="card-img-top" alt="" height="300px">
    <div class="card-body">
    <h5 class="card-title">{{item.name}}</h5>
    <p class="card-text">Rp.{{item.price}}</p>
    <p class="card-text text-muted"> stock: {{item.stock}}</p>
    <a href="#" class="btn btn-primary btn-sm-2" @click.prevent="getEdit(item.id)" style="margin-right: 10px;">Edit</a>
    <a href="#" class="btn btn-primary btn-sm-2" @click.prevent="destroy(item.id)">Delete</a>
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
