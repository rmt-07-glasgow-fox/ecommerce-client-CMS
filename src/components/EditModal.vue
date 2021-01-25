<template>
  <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
          <div class="form-group">
            <label class="col-form-label float-left">Product Name:</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Image:</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Price:</label>
            <input type="number" class="form-control">
          </div>
          <div class="form-group">
            <label class="col-form-label float-left">Stock:</label>
            <input type="number" class="form-control">
          </div>
        </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-info" href="login.html">Add</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style>

</style>
