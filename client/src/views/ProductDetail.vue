<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div v-if="isUpdate">
        <EditForm
          :product="product"/>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div>
        <div class="card" v-if="!isUpdate">
          <div class="card-header">
            {{ product.name }}
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-8">
                <img src="logo.png"/>
              </div>
              <div class="col-4 justify-content-between">
                <h5 class="card-title">Price: </h5>
                <p class="card-text">{{ product.price }}</p>
                <h5 class="card-title">Stock: </h5>
                <p class="card-text">{{ product.stock }} pcs</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="btn-group" v-if="!askDelete">
              <button
                type="button"
                class="btn btn-secondary"
                @click.prevent="changeUpdate(true)"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit">
                    <i
                      class="fas fa-pen"
                      ></i></button>

              <button
                type="button"
                class="btn btn-warning"
                @click="updateStatus(false)"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Stop Production">
                    <i class="fas fa-ban"></i></button>

              <button
                type="button"
                class="btn btn-danger"
                @click="isDelete(true)"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete">
                    <i class="fas fa-eraser"></i></button>

            </div>
            <div v-if="askDelete" class="d-flex justify-content-center">
              <div class="container">
                <div class="row d-flex justify-content-center">
                  <h5>Are You Sure ?</h5>
                </div>
                <div class="row d-flex justify-content-center">
                  <button type="button" @click.prevent="deleteProduct" class="btn btn-danger">Yes</button>
                  <button type="button" @click="isDelete(false)" class="btn btn-warning">No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditForm from '../components/EditForm'

export default {
  name: 'ProductDetail',
  methods: {
    fetchOneProduct () {
      const { id } = this.$route.params
      console.log(id)
      this.$store.dispatch('fetchOneProduct', id)
    },
    changeUpdate (input) {
      this.$store.commit('changeUpdate', input)
    },
    updateStatus (input) {
      const payload = {
        status: input,
        id: this.$route.params.id
      }

      this.$store.dispatch('updateStatus', payload)
    },
    isDelete (input) {
      this.$store.commit('isDelete', input)
    },
    deleteProduct () {
      const { id } = this.$route.params

      this.$store.dispatch('deleteProduct', id)
    }
  },
  computed: {
    ...mapState([
      'product',
      'isUpdate',
      'askDelete'
    ])
  },
  created () {
    this.fetchOneProduct()
  },
  components: {
    EditForm
  }
}
</script>

<style>
img {
  height: 150px;
  width: 250px;
  object-fit: cover;
}
</style>
