<template>
  <div>
    <div class="form-group">
        <label for="">Name</label>
        <input type="text" class="form-control" v-model="category.name">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormCategory',
  data () {
    return {
      category: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions('category', [
      'getCategories',
      'addCategories',
      'editCategories',
      'updateCategories'
    ]),

    clearForm () {
      this.product = {
        name: ''
      }
    },

    submit () {
      if (this.$route.name === 'category.add') {
        this.addCategories(this.category)
      } else if (this.$route.name === 'category.edit') {
        Object.assign(this.category, { id: this.$route.params.id })
        this.updateCategories(this.category)
      }
    }
  },
  created () {
    if (this.$route.name === 'category.edit') {
      this.editCategories(this.$route.params.id).then(res => {
        this.category = {
          name: res.data.name
        }
      })
    }
  }
}
</script>
