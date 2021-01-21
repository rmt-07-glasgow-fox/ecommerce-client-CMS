<template>
  <div class="col-4">
    <div
      class="card shadow mt-2 mb-5"
      style="width: 16rem; height: 512px; border-radius: 8px"
    >
      <img
        :src="Product.image_url"
        class="card-img-top"
        style="
          max-height: 100%;
          height: auto;
          overflow: hidden;
          align-item: center;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        "
      />
      <div class="card-body">
        <h5 class="card-title">{{ Product.name }}</h5>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            style="font-size: 12px; margin-left: 0; padding-left: 0"
          >
            Category: {{ Product.Category.name }}
          </li>
          <li
            class="list-group-item"
            style="font-size: 12px; margin-left: 0; padding-left: 0"
          >
            Price: Rp. {{ Product.price }}
          </li>
          <li
            class="list-group-item"
            style="font-size: 12px; margin-left: 0; padding-left: 0"
          >
            Stock: {{ Product.stock }}
          </li>
        </ul>
        <div class="container-fluid mt-2">
          <div class="row justify-content-center">
            <div class="col-6">
              <router-link :to="`product/edit/${Product.id}`">
                <button href="" class="btn btn-outline-primary">Edit</button>
              </router-link>
            </div>
            <div class="col-6">
              <button
                @click="deleteProduct(Product.id)"
                href=""
                class="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['Product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>
