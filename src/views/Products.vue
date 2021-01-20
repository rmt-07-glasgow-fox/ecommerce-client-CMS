<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Brand</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.name }}</td>
          <td>
            <img
              :src="baseURL + product.image_url"
              class="rounded"
              alt="..."
              width="100px"
            />
          </td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <img
              :src="baseURL + product.Brand.image_url"
              class="rounded"
              alt="..."
              width="80px"
            />
          </td>
          <td>
            <button class="btn btn-danger">Delete</button>
            <button class="btn btn-success">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getAllProducts");
  },
  computed: {
    ...mapState(["products", "baseURL"]),
  },
};
</script>