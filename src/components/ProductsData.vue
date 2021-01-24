<template>
  <div class="col-3">
    <div class="card" style="margin: 10px 10px">
      <img
        :src="product.image_url"
        class="card-img-top"
      />
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <h5>Rp {{product.price}}</h5>
        <p>stock: {{product.stock}}</p>
        <div>
        <!-- <button style="margin: 5px 5px;" class="btn btn-success">Buy</button> -->
        </div>
        <div>
        <button style="margin: 5px 5px;" class="btn btn-primary" @click="goEdit">Edit</button>
        <button style="margin: 5px 5px;" class="btn btn-danger" @click="goDelete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductData',
  props: ['product'],
  methods: {
    goDelete () {
      this.$store.dispatch('delete', this.product.id)
    },
    goEdit () {
      this.$store.dispatch('getOne', this.product.id)
      // this.$store.dispatch('getOne', this.$store.state.one)
      this.$router.push('/edit/' + this.product.id)
    }
  }
}

</script>

<style>
</style>
