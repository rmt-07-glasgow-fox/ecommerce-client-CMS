<template>
    <div class="col-md-12 mt-5">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Add New Product</h6>
            </div>
            <div class="card-body">
                <product-form ref="formProduct"></product-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm btn-block" @click.prevent="submit">
                        <i class="fa fa-save"></i> Add New
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormProduct from './Form'

export default {
  name: 'AddProduct',
  methods: {
    submit () {
      this.$refs.formProduct.submit()
    }
  },
  components: {
    'product-form': FormProduct
  }
}
</script>
