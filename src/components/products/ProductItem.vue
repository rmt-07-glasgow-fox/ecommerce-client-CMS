<template>
  <tr>
    <td scope="row">{{ index + 1 }}</td>
    <td v-if="!showEditActive">{{ product.name }}</td>
    <td v-if="!showEditActive"><img :src="product.image_url" width="100px" alt="" /></td>
    <td v-if="!showEditActive">{{ product.price }}</td>
    <td v-if="!showEditActive">{{ product.stock }}</td>
    <td v-if="!showEditActive">{{ product.Category.name }}</td>
    <td v-if="!showEditActive">
      <button class="btn btn-warning mr-2" @click="showEditForm">
        <i class="fa fa-edit" aria-hidden="true"></i></button
      ><button class="btn btn-danger" @click="deleteProduct(product.id)">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </td>
    <td colspan="6" v-if="showEditActive">
      <form>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label :for="'name-' + product.id">Name: </label>
              <input :id="'name-' + product.id" class="form-control" type="text" v-model="name" />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label :for="'price-' + product.id">Price: </label>
              <input
                :id="'price-' + product.id"
                class="form-control"
                type="number"
                v-model="price"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label :for="'stock-' + product.id">Stock: </label>
              <input
                :id="'stock-' + product.id"
                class="form-control mb-3"
                type="number"
                v-model="stock"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label :for="'category-' + product.id">Category:</label>
              <select :id="'category-' + product.id" class="form-control" v-model="CategoryId">
                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                  category.name
                }}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group mt-3">
          <button
            type="submit"
            class="btn btn-warning mr-2"
            @click.prevent="updateProduct(product.id)"
          >
            Edit</button
          ><button class="btn btn-danger" @click="hideEditForm">
            Cancel
          </button>
        </div>
      </form>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['index', 'product', 'categories'],
  data() {
    return {
      name: this.product.name,
      image_url: this.product.image_url,
      price: this.product.price,
      stock: this.product.stock,
      CategoryId: this.product.CategoryId,
      showEditActive: false,
    };
  },
  computed: {},
  methods: {
    showEditForm() {
      this.showEditActive = true;
    },
    hideEditForm() {
      this.showEditActive = false;
    },
    async updateProduct(id) {
      try {
        const payload = {
          id,
          name: this.name,
          price: Number(this.price),
          stock: Number(this.stock),
          image_url: this.image_url,
          image_name: this.image_name,
          CategoryId: this.CategoryId,
        };
        await this.$store.dispatch('updateProduct', payload);
        this.hideEditForm();
        this.$swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Product has been updated',
        });
        this.$store.dispatch('fetchProducts');
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
    deleteProduct(id) {
      this.$swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await this.$store.dispatch('deleteProduct', id);
              this.$swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Product has been deleted',
              });
            } catch (err) {
              this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
              });
            }
          }
        });
    },
  },
};
</script>

<style></style>
