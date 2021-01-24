<template>
    <div class="col-md-12 mt-5">
        <div class="card">
            <div class="card-header">
                <h6 class="card-title">Edit Banner</h6>
            </div>
            <div class="card-body">
                <banner-form ref="formBanner"></banner-form>
                <div class="form-group">
                    <button class="btn btn-primary btn-sm btn-block" @click.prevent="submit">
                        <i class="fa fa-save"></i> Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FormBanner from './Form'

export default {
  name: 'EditBenner',
  methods: {
    submit () {
      this.$refs.formBanner.submit()
    }
  },
  components: {
    'banner-form': FormBanner
  }
}
</script>
