<template>
<div class="col-3">
  <div class="card" style="width: 19.5rem; margin-bottom: 20px;">
  <img :src="content.imageUrl" class="card-img-top" style="margin-left: auto; margin-right:auto" alt="...">
  <div class="card-body">
<table class="table table-sm table-striped table-bordered">
  <tbody>
    <tr>
      <td style="font-size: 14px;">Name</td>
      <td style="font-size: 14px;">{{content.name}}</td>
    </tr>
    <tr>
      <td style="font-size: 14px;">Category</td>
      <td style="font-size: 14px;">{{content.category}}</td>
    </tr>
    <tr>
      <td style="font-size: 14px;">Price</td>
      <td style="font-size: 14px;">{{'Rp. ' + content.price.toLocaleString('id-ID')}}</td>
    </tr>
    <tr>
      <td style="font-size: 14px;">Stock</td>
      <td style="font-size: 14px;">{{content.stock}}</td>
    </tr>
    <tr>
      <td style="font-size: 14px;">Tags</td>
      <td style="font-size: 14px;">{{content.tags}}</td>
    </tr>
  </tbody>
</table>
<div style="display:flex; justify-content: center">
   <button class="btn btn-sm btn-primary" @click.prevent="goToEditContent">Edit</button> <button class="btn btn-sm btn-danger" @click.prevent="deleteContent"> Delete</button>
</div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'DashboardContent',
  props: ['content', 'componentKey'],
  methods: {
    forceRerender () {
      this.$emit('forceRerender')
    },
    goToEditContent () {
      this.$router.push('/dashboard/editContent/' + this.content.id)
    },
    deleteContent () {
      this.$store.dispatch('deleteContent', this.content.id)
      this.fetchContentList()
      this.forceRerender()
    },
    fetchContentList () {
      this.$emit('fetchContentList')
    }
  },
  created: function () {
    this.forceRerender()
    this.fetchContentList()
  }
}
</script>

<style scoped>
img {
  width:  150px;
  height: 150px;
  object-fit: cover;
}
td {
  vertical-align: middle
}
</style>
