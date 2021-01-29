<template>
  <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Are you sure?</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-danger" type="button" data-dismiss="modal" @click="deleteProduct(products.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          this.$store.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err, 'gabisa delete gan!')
        })
    }
  }
}
</script>

<style>

</style>
