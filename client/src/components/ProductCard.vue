<template>
  <div class="col-3">
    <div class="card">
      <img
        :src="product.image_url"
        class="card-img-top"
        height="250px"
      />
      <div class="card-body">
        <h5 class="card-title" style="height: 50px" > {{ product.name }} </h5>
        <p class="card-text"  > Price : Rp.{{ product.price}} </p>
        <p class="card-text"  > Stock : {{ product.stock}} </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style lang="stylus" scoped></style>
