<template>
  <div class="m-2">
    <b-card
    :title= "product.name"
    :img-src= "product.image_url"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 10rem;"
    class="mb-2"
    >
      <b-card-text>
        <p>Rp. {{ new Intl.NumberFormat('id-ID').format(product.price) }}</p>
        <p>stock: {{ product.stock }}</p>
      </b-card-text>
      <b-button size="sm" @click.prevent="deleteProduct(product.id)" class="m-1"><b-icon icon="trash"></b-icon></b-button>
      <b-button size="sm" @click.prevent="showModal" class="m-1"><b-icon icon="pencil-square"></b-icon></b-button>
      <b-modal ref="my-modal" hide-footer>
        <div class="d-block text-center">
          <h3>Edit form</h3>
          <b-form @submit.prevent="updateProduct(product.id)" class="mt-2">
            <b-input-group prepend="name" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input id="inline-form-input-username"  v-model="payload.name"></b-form-input>
            </b-input-group>
            <b-input-group prepend="image url" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input id="inline-form-input-username"  v-model="payload.image_url"></b-form-input>
            </b-input-group>
            <b-input-group prepend="price " class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input id="inline-form-input-username"   v-model="payload.price"></b-form-input>
            </b-input-group>
            <b-input-group prepend="stock" class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-input id="inline-form-input-username"   v-model="payload.stock"></b-form-input>
            </b-input-group>
            <b-button class="mt-3" type="submit" variant="primary" @click="showMsg" >submit</b-button>
          </b-form>
        </div>
    </b-modal>
    <b-modal ref="msg-modal" hide-footer>
      <div class="d-block text-center">
        <h3>Update success!</h3>
      </div>
      <b-button class="mt-3" variant="primary" @click="hideModal">Ok</b-button>
    </b-modal>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    deleteProduct (id) {
      console.log(id)
      this.$store.dispatch('deleteProduct', id)
    },
    updateProduct (id) {
      const data = {
        id,
        payload: this.payload
      }
      this.$store.dispatch('updateProduct', data)
    },
    showModal () {
      this.$refs['my-modal'].show()
    },
    showMsg () {
      this.$refs['my-modal'].hide()
      this.$refs['msg-modal'].show()
    },
    hideModal () {
      this.$refs['msg-modal'].hide()
    }
  }
}
</script>

<style>

</style>
