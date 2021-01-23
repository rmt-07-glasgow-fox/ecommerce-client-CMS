<template>
  <div>
    <b-modal
      id="product-detail"
      size="xl"
      centered
      title="Produk Detail"
      no-btn
    >
      <b-card class="mb-3 p-4">
        <b-row>
          <b-col>
            <b-img
              v-bind="mainProps"
              :src="product.image_url"
              @error="imageLoadError"
              col
            ></b-img>
          </b-col>
          <b-col>
            <b-card-text col>
              <h3>Description</h3>
              <p style="white-space: pre-line">{{ product.description }}</p>
              <table class="table">
                <tr >
                  <td style="border-top: none !important"><strong>Product Name</strong></td>
                  <td style="border-top: none !important" width="15">:</td>
                  <td style="border-top: none !important">{{ product.name }}</td>
                </tr>
                <tr>
                  <td><strong>Category</strong></td>
                  <td width="15">:</td>
                  <td>{{ product.Category['categoryName'] }}</td>
                </tr>
                <tr>
                  <td><strong>Price</strong></td>
                  <td width="15">:</td>
                  <td>{{ moneyFormat }}</td>
                </tr>
                <tr>
                  <td><strong>Stock</strong></td>
                  <td width="15">:</td>
                  <td>{{ product.stock }} items</td>
                </tr>
                <tr>
                  <td><strong>Status</strong></td>
                  <td width="15">:</td>
                  <td>{{ status }}</td>
                </tr>
              </table>
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>

      <template #modal-footer="{ close }">
        <b-button size="xl" variant="secondary" @click="close()">
          CLOSE
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import numeral from 'numeral'

export default {
  name: 'Modal',
  data () {
    return {
      defaultImg: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png',
      mainProps: {
        width: 500
      }
    }
  },
  methods: {
    imageLoadError () {
      this.product.image_url = this.defaultImg
    }
  },
  computed: {
    moneyFormat () {
      return 'IDR ' + numeral(this.product.price).format('0,0')
    },
    status () {
      return this.product.status ? 'Active' : 'Inactive'
    }
  },
  props: ['product']
}
</script>

<style>

</style>
